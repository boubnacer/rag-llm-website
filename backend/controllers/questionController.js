const OpenAIQ = require('openai').default;
const ChunkQ = require('../models/Chunk');
const { cosineSimilarity } = require('../utils/computeSimilarity');

const openaiQ = new OpenAIQ({ apiKey: process.env.OPENAI_API_KEY });

async function handleQuestion(req, res) {
  try {
    console.log('--- Début traitement question ---');
    const question = req.body.question;
    const docId = req.body.docId;
    console.log('Question:', question);
    console.log('docId:', docId);

    // Embedding de la question
    const qRes = await openaiQ.embeddings.create({ model: 'text-embedding-ada-002', input: question });
    const qVec = qRes.data[0].embedding;

    // Récupérer les chunks du document sélectionné ou tous
    let chunkQuery = {};
    if (docId) {
      chunkQuery = { docId };
    }
    const allChunks = await ChunkQ.find(chunkQuery);
    console.log(`Chunks en BD (filtrés) : ${allChunks.length}`);
    allChunks.forEach((c, i) => {
      console.log(`Chunk DB #${i + 1} (length: ${c.text.length}):`, c.text.substring(0, 200));
    });

    if (!allChunks.length) {
      return res.json({ answer: "Aucune information trouvée dans ce document." });
    }

    // Calcul de similarité et tri
    const scored = allChunks
      .map(c => ({ text: c.text, score: cosineSimilarity(qVec, c.vector) }))
      .sort((a, b) => b.score - a.score);

    // Top 5 (for debug)
    const top5 = scored.slice(0, 5);
    const topScores = top5.map(c => c.score);
    console.log('Top scores:', topScores);
    top5.forEach((c, i) => {
      console.log(`Chunk #${i + 1} (score: ${c.score.toFixed(3)}):`, c.text.substring(0, 200));
    });

    // Seuil de similarité minimal
    const MIN_SIMILARITY = 0.15;
    if (topScores.length === 0 || topScores[0] < MIN_SIMILARITY) {
      return res.json({ answer: "Aucune information pertinente trouvée dans ce document pour votre question." });
    }

    // Contexte (send top 5 chunks)
    const context = top5.map(c => c.text).filter(Boolean).join('\n---\n');
    console.log('Contexte envoyé au modèle:', context);

    // If context is empty or too short, do NOT call OpenAI, return custom message
    if (!context || context.length < 30) {
      return res.json({ answer: "Aucune information exploitable trouvée dans ce document pour votre question." });
    }

    // ChatCompletion
    const messages = [
      { role: 'system', content: 'Vous êtes un assistant. Répondez uniquement avec les informations fournies. Si le contexte ne contient pas la réponse, dites simplement : Je ne trouve pas la réponse dans le document.' },
      { role: 'user', content: `Contexte : ${context}\nQuestion : ${question}` },
    ];
    const chatRes = await openaiQ.chat.completions.create({ model: 'gpt-4', messages });
    const answer = chatRes.choices[0].message.content;

    res.json({ answer });
    console.log('--- Fin traitement question ---');
  } catch (err) {
    console.error('Erreur traitement question :', err.message);
    res.status(500).json({ error: `Erreur traitement question : ${err.message}` });
  }
}

module.exports = { handleQuestion };
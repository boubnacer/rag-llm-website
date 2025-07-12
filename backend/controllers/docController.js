const path = require('path');
const fs = require('fs');
const { extractText } = require('../utils/extractText');
const { splitText } = require('../utils/textSplitter');
const OpenAI = require('openai').default;
const Document = require('../models/Document');
const Chunk = require('../models/Chunk');

// Initialise le client OpenAI (clé depuis .env)
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function uploadDocument(req, res) {
  try {
    console.log('--- Début indexation document ---');

    const doc = await Document.create({ filename: req.file.filename, originalName: req.file.originalname });

    const text = await extractText(req.file.path);
    console.log(`Texte extrait : ${text.length} caractères`);
    console.log('Aperçu du texte extrait:', text.substring(0, 500));


    let chunks = splitText(text);
    console.log(`Chunks générés : ${chunks.length}`);
    // Log each chunk's length and preview
    chunks.forEach((c, i) => console.log(`Chunk ${i + 1} (${c.length} chars):`, c.substring(0, 100)));
    if (!chunks.length) {
      return res.status(400).json({ error: 'Le document ne contient pas de texte exploitable.' });
    }

    const MAX_CHUNKS = 20;
    if (chunks.length > MAX_CHUNKS) {
      console.log(`Limitation des chunks à ${MAX_CHUNKS}`);
      chunks = chunks.slice(0, MAX_CHUNKS);
    }

    const chunkDocs = [];
    for (let i = 0; i < chunks.length; i++) {
      const chunkText = chunks[i];
      if (!chunkText.trim()) {
        console.warn('Chunk vide ignoré');
        continue;
      }
      try {
        const embeddingRes = await openai.embeddings.create({ model: 'text-embedding-ada-002', input: chunkText });
        const vector = embeddingRes.data[0].embedding;
        console.log(`Embedding vector for chunk #${i + 1} (first 5):`, vector.slice(0, 5));
        chunkDocs.push({ docId: doc._id, text: chunkText, vector });
      } catch (embedErr) {
        console.error('Embedding error for chunk #'+(i+1)+':', embedErr.message);
        // continue to next chunk without failing entire upload
      }
    }

    if (!chunkDocs.length) {
      return res.status(500).json({ error: 'Aucun chunk n’a pu être vectorisé.' });
    }

    await Chunk.insertMany(chunkDocs);
    console.log('Chunks insérés en base :', chunkDocs.length);

    res.json({ message: `Document indexé (${chunkDocs.length} chunks).` });
    console.log('--- Fin indexation document ---');
  } catch (err) {
    console.error('Erreur d\'indexation globale:', err.message);
    res.status(500).json({ error: `Erreur indexation : ${err.message}` });
  }
}

module.exports = { uploadDocument };
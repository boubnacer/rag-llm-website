// Sliding window chunking: 512 words per chunk, 128 words overlap
function splitText(text, chunkSize = 256, overlap = 64) {
  // Normalize line breaks and remove extra whitespace
  const cleanText = text.replace(/\r/g, '').replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
  const words = cleanText.split(' ');
  const chunks = [];
  for (let i = 0; i < words.length; i += chunkSize - overlap) {
    const chunk = words.slice(i, i + chunkSize).join(' ').trim();
    if (chunk.length > 0) {
      chunks.push(chunk);
    }
  }
  return chunks;
}

module.exports = { splitText };
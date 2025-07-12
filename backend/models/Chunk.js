const mongoose = require('mongoose');

const ChunkSchema = new mongoose.Schema({
  docId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document' },
  text: String,
  vector: [Number]
});

module.exports = mongoose.model('Chunk', ChunkSchema);
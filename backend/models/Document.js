const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', DocumentSchema);
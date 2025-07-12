const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

router.get('/', async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const Chunk = require('../models/Chunk');

router.get('/:id', async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    const chunks = await Chunk.find({ docId: doc._id });
    res.json({ ...doc.toObject(), chunks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
    try {
      await Chunk.deleteMany({ docId: req.params.id });
      await Document.findByIdAndDelete(req.params.id);
      res.json({ message: 'Document deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;
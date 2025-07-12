const express = require('express');
const multer = require('multer');
const { uploadDocument } = require('../controllers/docController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Preserve original extension
    const ext = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
  }
});
const upload = multer({ storage });

router.post('/', upload.single('file'), uploadDocument);
module.exports = router;
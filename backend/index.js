require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uploadRoutes = require('./routes/upload');
const askRoutes = require('./routes/ask');

// Connect to MongoDB
require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/ask', askRoutes);
app.use('/api/documents', require('./routes/documents'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(cors({ origin: 'http://localhost:5173' })); // Adjust port if needed




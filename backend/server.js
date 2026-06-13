const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'CloudVault Backend is running' });
});

// Authentication Routes
app.post('/api/auth/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

app.post('/api/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

// Cloud Routes
app.get('/api/clouds', (req, res) => {
  res.json({ clouds: [] });
});

app.post('/api/clouds', (req, res) => {
  res.json({ message: 'Cloud created' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`CloudVault Backend running on http://localhost:${PORT}`);
});

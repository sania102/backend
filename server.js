const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

// Sample API Endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node.js Backend!' });
});

// Post API Endpoint
app.post('/api/submit', (req, res) => {
  const data = req.body;
  res.json({ receivedData: data, message: 'Data received successfully!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

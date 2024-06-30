const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/about', (req, res) => {
  res.send('About us page');
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

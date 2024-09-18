const express = require('express');
const countStudents = require('./3-read_file_async');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const filePath = process.argv[2];

  if (!filePath) {
    return res.status(400).send('Database file path is required');
  }

  try {
    await countStudents(filePath);
    res.send('Done!');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http:
});

module.exports = app;

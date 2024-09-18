const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for /students
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    await countStudents(process.argv[2]); // Call the countStudents function with the CSV file
  } catch (error) {
    res.end(error.message);
    return; // Exit after handling the error
  }
  res.end(); // End the response after successfully processing
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app
module.exports = app;

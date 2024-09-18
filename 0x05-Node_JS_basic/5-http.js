const http = require('http');
const countStudents = require('./3-read_file_async');

// Get the database file path from the command-line arguments
const databaseFile = process.argv[2];

// Create the server
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Handle root path
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Handle /students path
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    // Read the database file asynchronously and send the student data
    countStudents(databaseFile)
      .then(() => {
        res.end(); // End the response once the data has been logged
      })
      .catch((err) => {
        res.end(err.message); // Send error message if the database cannot be loaded
      });
  } else {
    // Handle other paths (404 Not Found)
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;

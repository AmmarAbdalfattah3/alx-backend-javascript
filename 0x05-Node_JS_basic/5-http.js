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
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    countStudents(databaseFile)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');  // Import the countStudents function

// Create the server
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Handle the root route "/"
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }

  // Handle the "/students" route
  else if (parsedUrl.pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      // Pass the CSV file from the command line argument
      const result = await countStudents(process.argv[2]);
      res.end(result);  // Send the result from countStudents to the client
    } catch (err) {
      res.end(err.message);  // Send error message if the file cannot be loaded
    }
  }

  // Handle unknown routes
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;

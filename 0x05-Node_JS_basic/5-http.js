const http = require('http');
const countStudents = require('./3-read_file_async'); // Importing the countStudents function

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    // Handle the root endpoint
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    // Handle the /students endpoint
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Call the countStudents function
    countStudents(process.argv[2])
      .then(() => {
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`${error.message}\n`);
      });
  } else {
    // Handle 404 for any other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

const PORT = 1245;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

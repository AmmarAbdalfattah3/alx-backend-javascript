const url = require('url');
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const path = url.parse(req.url).pathname;

  if (path === '/') {
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    res.write('This is the list of our students\n');
    try {
      await countStudents(process.argv[2]);
    } catch (error) {
      res.end(error.message);
      return;
    }
    res.end();
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

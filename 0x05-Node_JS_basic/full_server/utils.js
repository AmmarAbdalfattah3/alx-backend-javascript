const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line !== '');
      // Remove the header line without assigning it to a variable
      lines.shift();

      const studentsByField = {};

      lines.forEach((row) => {
        const [firstName, , , field] = row.split(',');

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      });

      resolve(studentsByField);
    });
  });
}

module.exports = readDatabase;

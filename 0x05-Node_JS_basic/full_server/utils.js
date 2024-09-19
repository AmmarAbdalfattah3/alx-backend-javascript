const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const content = data.trim().split('\n').filter((line) => line !== '');
      const header = content.shift();
      const studentsByField = {};

      content.forEach((row) => {
        const studentData = row.split(',');
        const field = studentData[3];
        const firstName = studentData[0];

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

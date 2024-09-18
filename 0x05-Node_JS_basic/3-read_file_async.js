const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');

      const students = lines.slice(1).filter((line) => line !== '');

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((student) => {
        const [firstName, , , field] = student.split(',');

        if (field in fields) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
      });

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;

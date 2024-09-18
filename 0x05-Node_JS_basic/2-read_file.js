const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1).map((line) => line.split(','));

    if (students.length === 0) {
      throw new Error('No students found in the database');
    }

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const [firstName, , , field] = student;
      if (field in fields) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }
    });

    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        const studentsInField = fields[field];
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

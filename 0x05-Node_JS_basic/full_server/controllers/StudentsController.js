const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    try {
      const students = await readDatabase(databaseFile);
      let responseText = 'This is the list of our students\n';

      Object.keys(students).sort().forEach((field) => {
        const studentList = students[field].join(', ');
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${studentList}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(databaseFile);
      if (students[major]) {
        const studentList = students[major].join(', ');
        res.status(200).send(`List: ${studentList}`);
      } else {
        res.status(200).send('List:');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

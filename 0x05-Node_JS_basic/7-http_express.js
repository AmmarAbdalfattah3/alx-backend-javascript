const express = require('express');
const fs = require('fs').promises;

// Create an Express application
const app = express();

// Function to read and process the database file
const countStudents = async (filePath) => {
  try {
    // Read file asynchronously
    const data = await fs.readFile(filePath, 'utf8');

    // Parse CSV content
    const lines = data.trim().split('\n').slice(1); // Skip header
    const students = lines.map((line) => line.split(','));

    // Prepare student counts by field
    const fields = {};
    let totalStudents = 0;

    students.forEach(([firstName, , , field]) => {
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
        totalStudents += 1;
      }
    });

    return { totalStudents, fields };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Define route for root path
app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

// Define route for /students path
app.get('/students', async (req, res) => {
  const filePath = process.argv[2]; // Get database file path from command-line arguments

  try {
    const { totalStudents, fields } = await countStudents(filePath);

    let response = `This is the list of our students\nNumber of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    res.type('text').send(response.trim());
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

// Start server on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the Express app
module.exports = app;


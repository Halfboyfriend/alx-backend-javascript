const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file 
    const databaseContent = fs.readFileSync(path, 'utf-8');
    
    // Split the content into lines and remove any empty lines
    const lines = databaseContent.split('\n').filter(line => line.trim() !== '');

    // Initialize counters for each field
    let firstNameCount = 0;
    let lastNameCount = 0;
    let ageCount = 0;
    let locationCount = 0;

    // Initialize arrays to store values for each field
    let firstNames = [];
    let lastNames = [];
    let ages = [];
    let locations = [];

    // Process each line of the CSV
    lines.forEach(line => {
      const [firstName, lastName, age, location] = line.split(',');
      if (firstName) {
        firstNameCount++;
        firstNames.push(firstName);
      }
      if (lastName) {
        lastNameCount++;
        lastNames.push(lastName);
      }
      if (age) {
        ageCount++;
        ages.push(age);
      }
      if (location) {
        locationCount++;
        locations.push(location);
      }
    });

    // Log the results
    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of students in First Name: ${firstNameCount}. List: ${firstNames.join(', ')}`);
    console.log(`Number of students in Last Name: ${lastNameCount}. List: ${lastNames.join(', ')}`);
    console.log(`Number of students in Age: ${ageCount}. List: ${ages.join(', ')}`);
    console.log(`Number of students in Location: ${locationCount}. List: ${locations.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Example usage
const databasePath = 'database.csv';
countStudents(databasePath);

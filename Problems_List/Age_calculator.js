// Import readline module to take input from the terminal
const readline = require("readline");

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Function to calculate age from date of birth
 * @param {string} dobStr - Date of birth in dd/mm/yyyy format
 * @returns {object} age in years, months, and days
 */
function calculateAge(dobStr) {
  // Split input string by "/"
  const parts = dobStr.split("/");

  // Check if format is correct
  if (parts.length !== 3) {
    throw new Error("Invalid format. Please use dd/mm/yyyy");
  }

  // Extract day, month, and year
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // JavaScript months start from 0
  const year = parseInt(parts[2], 10);

  // Create Date object for birth date
  const birthDate = new Date(year, month, day);

  // Validate the date (handles cases like 31/02/2020)
  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month ||
    birthDate.getDate() !== day
  ) {
    throw new Error("Invalid date entered");
  }

  // Get today's date
  const today = new Date();

  // Initial age calculation
  let ageYears = today.getFullYear() - year;
  let ageMonths = today.getMonth() - month;
  let ageDays = today.getDate() - day;

  // If days are negative, borrow days from previous month
  if (ageDays < 0) {
    ageMonths--;

    // Get number of days in the previous month
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );
    ageDays += previousMonth.getDate();
  }

  // If months are negative, borrow months from years
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // Return age as an object
  return {
    ageYears,
    ageMonths,
    ageDays,
  };
}

// Ask user for date of birth
rl.question("Enter your birthdate (dd/mm/yyyy): ", (input) => {
  try {
    // Calculate age
    const age = calculateAge(input);

    // Display result
    console.log(
      `You are ${age.ageYears} years, ${age.ageMonths} months, and ${age.ageDays} days old.`
    );
  } catch (error) {
    // Handle errors (invalid format or date)
    console.error("Error:", error.message);
  } finally {
    // Close the readline interface
    rl.close();
  }
});

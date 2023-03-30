/**
 * Submitted By: Rugma Muraleedharan Sandhya
 * Group 4 - Team Panda
 * Unit Testing for Registration
 */

/**
 * Function for checking username exists in the database or not.
 * For now, I have assumed an array of usernames since I am not able to externally connect it with the database.
 */

const existingUsernames = ['rugma', 'chahat', 'swara', 'baibhavi'];

function checkUsernameExists(username) {
  return existingUsernames.includes(username);
}

/**
 * Function for checking valid email id
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Submitted By: Baibhavi Karki
 * Group 4 - Team Panda
 **/
/*
 * Unit Testing for adding new animal
 * Function for adding animal
 */
const animals = [];

function validateAnimal(animal) {
  const { name, species, age, location } = animal;
  if (!name || !species || typeof age !== 'number' || !location) {
    throw new Error('Missing required fields');
  }
  if (age < 0) {
    throw new Error('Invalid data');
  }
}
function addAnimal(animal) {
  validateAnimal(animal);
  animals.push(animal);
  return animal;
}

/*
 * Submitted By: Baibhavi Karki
 * Group 4 - Team Panda
 */
/*
 * Unit Testing for adding new animal
 * Function for adding animal
 */

const locations = [];

function validateLocation(location) {
  const { name, country, coordinates } = location;
  if (!name || !country || !Array.isArray(coordinates) || coordinates.length !== 2) {
    throw new Error('Missing required fields');
  }
  const [latitude, longitude] = coordinates;
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    throw new Error('Invalid data');
  }
}

function addLocation(location) {
  validateLocation(location);
  locations.push(location);
  return location;
}

module.exports = {
  addAnimal,
  addLocation,
  checkUsernameExists,
  isValidEmail
};

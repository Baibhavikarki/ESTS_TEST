/**
 * Submitted By: Rugma Muraleedharan Sandhya
 * Group 4 - Team Panda
 * Unit Testing for Registration
 */

/**
 * Function 2 - Check entered email is valid or not
 * If the email is valid return true else return false
 */

const { isValidEmail } = require('./ests_testsolutions');

describe('email id is valid or not', function () {
  test('returns true if email id is valid', function () {
    let result = isValidEmail('rmuraleedharan-sandh@myseneca.ca');
    expect(result).toBe(true);
  });

  test('returns false if the email id is invalid', function () {
    let result = isValidEmail('anu123');
    expect(result).toBe(false);
  });
});

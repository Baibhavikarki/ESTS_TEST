/**
 * Submitted By: Rugma Muraleedharan Sandhya
 * Group 4 - Team Panda
 * Unit Testing for Registration
 */

/** Function 1 - check username is existing in the database or not
 * if the username exists the function should return true value else it should return false value
 */
const { checkUsernameExists } = require('./ests_testsolutions');

describe('check username is existing in the database', function() {
    test('returns true if the username exists', function(){
        let result = checkUsernameExists('rugma');
        expect(result).toBe(true);
    });

    test('returns false if the username is not exists', function(){
        let result = checkUsernameExists('anu');
        expect(result).toBe(false);
    });
});


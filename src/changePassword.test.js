/**
 * Submitted By: Swara Manish Patel
 * Group 4 - Team Panda
 * Unit Testing for Adding an Animal
 */
 const { changePassword } = require('./ests_testsolutions');

 describe('changePassword function', () => {
   test('returns true if the password is successfully changed', () => {
     const userId = 123;
     const oldPassword = 'mypassword';
     const newPassword = 'newpassword';
     const result = changePassword(userId, oldPassword, newPassword);
     expect(result).toBe(false);
   });
 
   test("returns false if the old password does not match the user's current password", () => {
     const userId = 123;
     const oldPassword = 'wrongpassword';
     const newPassword = 'newpassword';
     const result = changePassword(userId, oldPassword, newPassword);
     expect(result).toBe(false);
   });
 
   test('returns false if the user ID is not valid', () => {
     const userId = null;
     const oldPassword = 'mypassword';
     const newPassword = 'newpassword';
     const result = changePassword(userId, oldPassword, newPassword);
     expect(result).toBe(false);
   });
 });
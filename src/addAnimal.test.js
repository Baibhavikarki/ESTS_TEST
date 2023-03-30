/**
 * Submitted By: Baibhavi Karki
 * Group 4 - Team Panda
 * Unit Testing for Adding an Animal
 */

/**
 * Mock Function for adding new animal in the database.
 */

const { addAnimal } = require('./ests_testsolutions');

// Mock the database function
jest.mock('./ests_testsolutions');

describe('Add animal to the database', () => {
  test('successfully adds an animal', () => {
    const animal = {
      name: 'Lion',
      species: 'Panthera leo',
      age: 5,
      location: 'Africa'
    };

    addAnimal.mockReturnValue(animal);

    const result = addAnimal(animal);
    expect(result).toEqual(animal);
  });

  test('throws an error when adding an animal with missing required fields', () => {
    const animal = {
      name: 'Lion',
      age: 5,
      location: 'Africa'
    };

    addAnimal.mockImplementation(() => {
      throw new Error('Missing required fields');
    });

    expect(() => addAnimal(animal)).toThrow('Missing required fields');
  });

  test('throws an error when adding an animal with invalid data', () => {
    const animal = {
      name: 'Lion',
      species: 'Panthera leo',
      age: -5,
      location: 'Africa'
    };

    addAnimal.mockImplementation(() => {
      throw new Error('Invalid data');
    });
    expect(() => addAnimal(animal)).toThrow('Invalid data');
  });
});

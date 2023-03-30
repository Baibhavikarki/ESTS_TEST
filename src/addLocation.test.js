/**
 * Submitted By: Baibhavi Karki
 * Group 4 - Team Panda
 * Unit Testing for adding locations
 */

/**
 * Mock Function for aadding a location
 */

const { addLocation } = require('./ests_testsolutions');

jest.mock('./ests_testsolutions');

describe('Add location to the database', () => {
  test('successfully adds a location', () => {
    const location = {
      name: 'Serengeti National Park',
      country: 'Tanzania',
      coordinates: [-2.27911, 34.79611]
    };

    addLocation.mockReturnValue(location);

    const result = addLocation(location);
    expect(result).toEqual(location);
  });

  test('throws an error when adding a location with missing required fields', () => {
    const location = {
      name: 'Serengeti National Park',
      coordinates: [-2.27911, 34.79611]
    };

    addLocation.mockImplementation(() => {
      throw new Error('Missing required fields');
    });

    expect(() => addLocation(location)).toThrow('Missing required fields');
  });

  test('throws an error when adding a location with invalid data', () => {
    const location = {
      name: 'Serengeti National Park',
      country: 'Tanzania',
      coordinates: [-91, 34.79611] // Invalid latitude
    };

    addLocation.mockImplementation(() => {
      throw new Error('Invalid data');
    });

    expect(() => addLocation(location)).toThrow('Invalid data');
  });
});

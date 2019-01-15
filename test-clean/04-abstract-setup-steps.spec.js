const PersonManager = require('../src/PersonManager');
const Person = require('../src/Person-v2');

/**
 * Creates a PersonManager instance, pre-populated with Person instances using provided and
 * default data.
 *
 * @param {object[]} personConfigs An array of objects representing configurations for the persons
 * to create
 * @param {string} personConfigs[].name The name of the person to create. Defaults to '' if not
 * provided
 * @param {string} personConfigs[].age The age of the person to create. Defaults to 0 if not
 * provided
 * @param {string} personConfigs[].occupation The occupation of the person to create. Defaults to ''
 * if not provided
 * @param {string} personConfigs[].favoriteFood The favorite food of the person to create. Defaults
 * to '' if not provided.
 * @param {string} personConfigs[].atWork The atWork property value of the person. Defaults to
 * false if not provided.
 * @returns {PersonManager} The PersonManager instance.
 */
const setupPersonManager = (personConfigs) => {
  const defaultPersonConfig = {
    name: '',
    age: 0,
    occupation: '',
    favoriteFood: '',
    atWork: false,
  };

  const persons = personConfigs.map((personConfig) => {
    const configToApply = { ...defaultPersonConfig, ...personConfig };
    const person = new Person();

    person.name = configToApply.name;
    person.age = configToApply.age;
    person.occupation = configToApply.occupation;
    person.favoriteFood = configToApply.favoriteFood;
    person.atWork = configToApply.atWork;

    return person;
  });

  return new PersonManager(persons);
};

describe('The PersonManager() class', () => {
  let personManager;

  beforeEach(() => {
    personManager = setupPersonManager([
      { name: 'Bob', occupation: 'software engineer' },
      { name: 'Meg', occupation: 'teacher' },
      { name: 'Maddie', occupation: 'student' },
      { name: 'Ellie', occupation: 'student' },
    ]);
  });

  it('getNames() method returns the names of all persons being managed', () => {
    expect(personManager.getNames()).toEqual(['Bob', 'Meg', 'Maddie', 'Ellie']);
  });

  it('getOccupations() method returns occupations of all persons being managed', () => {
    expect(personManager.getOccupations()).toEqual([
      'software engineer',
      'teacher',
      'student',
      'student',
    ]);
  });

  describe('isEveryoneAtWork() method', () => {
    it('returns true if atWork for all persons is true', () => {
      personManager = setupPersonManager([
        { atWork: true },
        { atWork: true },
        { atWork: true },
        { atWork: true },
      ]);
      expect(personManager.isEveryoneAtWork()).toEqual(true);
    });

    it("returns false if at least one person's atWork property is false", () => {
      personManager = setupPersonManager([
        { atWork: true },
        { atWork: true },
        { atWork: true },
        { atWork: false },
      ]);
      expect(personManager.isEveryoneAtWork()).toEqual(false);
    });
  });

  describe('isEveryoneHome() method', () => {
    it('returns true if atWork for all persons is false', () => {
      personManager = setupPersonManager([{}, {}, {}, {}]);
      expect(personManager.isEveryoneHome()).toEqual(true);
    });

    it("returns false if at least one person's atWork property is true", () => {
      personManager = setupPersonManager([{ atWork: true }, {}, {}, {}]);
      expect(personManager.isEveryoneHome()).toEqual(false);
    });
  });
});

const PersonManager = require('../src/PersonManager-v2');
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
    personManager = setupPersonManager([{ name: 'Bob', age: 38 }]);
  });

  it('giveEveryoneBirthday() method ages all persons by 1 year', () => {
    personManager.giveEveryoneBirthday();
    expect(personManager.persons[0].age).toEqual(39);
  });

  it('ageEveryoneBy() method ages all persons by the specified amount', () => {
    personManager.ageEveryoneBy(10);
    expect(personManager.persons[0].age).toEqual(48);
  });
});

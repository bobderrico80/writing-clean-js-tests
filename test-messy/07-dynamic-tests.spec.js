const PersonManager = require('../src/PersonManager-v2');
const Person = require('../src/Person-v2');
const getAgeRangeName = require('../src/getAgeRangeName');

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
      { name: 'Bob', age: 38 },
      { name: 'Meg', age: 37 },
      { name: 'Maddie', age: 12 },
      { name: 'Ellie', age: 8 },
    ]);
  });

  it('giveEveryoneBirthday() method ages all persons by 1 year', () => {
    personManager.giveEveryoneBirthday();
    expect(personManager.persons[0].age).toEqual(39);
    expect(personManager.persons[1].age).toEqual(38);
    expect(personManager.persons[2].age).toEqual(13);
    expect(personManager.persons[3].age).toEqual(9);
  });

  it('ageEveryoneBy() method ages all persons by the specified amount', () => {
    personManager.ageEveryoneBy(10);
    expect(personManager.persons[0].age).toEqual(48);
    expect(personManager.persons[1].age).toEqual(47);
    expect(personManager.persons[2].age).toEqual(22);
    expect(personManager.persons[3].age).toEqual(18);
  });
});

describe('The getAgeRangeName() function', () => {
  it('returns a "baby" age range name', () => {
    expect(getAgeRangeName(0)).toEqual('baby');
  });

  it('returns a "toddler" age range name', () => {
    expect(getAgeRangeName(2)).toEqual('toddler');
  });

  it('returns a "kid" age range name', () => {
    expect(getAgeRangeName(6)).toEqual('kid');
  });

  it('returns a "tween" age range name', () => {
    expect(getAgeRangeName(10)).toEqual('tween');
  });

  it('returns a "teen" age range name', () => {
    expect(getAgeRangeName(16)).toEqual('teen');
  });

  it('returns a "young adult" age range name', () => {
    expect(getAgeRangeName(20)).toEqual('young adult');
  });

  it('returns a "adult" age range name', () => {
    expect(getAgeRangeName(30)).toEqual('adult');
  });

  it('returns a "senior citizen" age range name', () => {
    expect(getAgeRangeName(65)).toEqual('senior citizen');
  });
});

const PersonManager = require('../src/PersonManager');
const Person = require('../src/Person-v2');

describe('The PersonManager() class', () => {
  let personManager;

  beforeEach(() => {
    const person1 = new Person('Bob', 38, 'software engineer', 'tortellini');
    const person2 = new Person('Meg', 37, 'teacher', 'nachos');
    const person3 = new Person('Maddie', 12, 'student', 'pizza');
    const person4 = new Person('Ellie', 8, 'student', 'burgers');
    personManager = new PersonManager([person1, person2, person3, person4]);
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
    let person1;
    let person2;
    let person3;
    let person4;

    beforeEach(() => {
      person1 = new Person('Bob', 38, 'software engineer', 'tortellini');
      person2 = new Person('Meg', 37, 'teacher', 'nachos');
      person3 = new Person('Maddie', 12, 'student', 'pizza');
      person4 = new Person('Ellie', 8, 'student', 'burgers');
      personManager = new PersonManager([person1, person2, person3, person4]);
    });

    it('returns true if atWork for all persons is true', () => {
      person1.atWork = true;
      person2.atWork = true;
      person3.atWork = true;
      person4.atWork = true;
      expect(personManager.isEveryoneAtWork()).toEqual(true);
    });

    it("returns false if at least one person's atWork property is false", () => {
      person1.atWork = true;
      person2.atWork = true;
      person3.atWork = true;
      person4.atWork = false;
      expect(personManager.isEveryoneAtWork()).toEqual(false);
    });
  });

  describe('isEveryoneHome() method', () => {
    let person1;
    let person2;
    let person3;
    let person4;

    beforeEach(() => {
      person1 = new Person('Bob', 38, 'software engineer', 'tortellini');
      person2 = new Person('Meg', 37, 'teacher', 'nachos');
      person3 = new Person('Maddie', 12, 'student', 'pizza');
      person4 = new Person('Ellie', 8, 'student', 'burgers');
      personManager = new PersonManager([person1, person2, person3, person4]);
    });

    it('returns true if atWork for all persons is false', () => {
      expect(personManager.isEveryoneHome()).toEqual(true);
    });

    it("returns false if at least one person's atWork property is true", () => {
      person1.atWork = true;
      expect(personManager.isEveryoneHome()).toEqual(false);
    });
  });
});

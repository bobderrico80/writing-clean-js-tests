const Person = require('../src/2-3-Person');

describe('The Person class', () => {
  let person;

  beforeEach(() => {
    person = new Person('Bob', 38, 'Elsevier', 'tortellini');
  });

  // The Person class sets atWork property to false by default
  it('sets atWork property to false by default', () => {
    expect(person.atWork).toEqual(false);
  });

  // The Person class sayName() method returns expected message with person's name
  it("sayName() method returns expected message with person's name", () => {
    expect(person.sayName()).toEqual('My name is Bob');
  });

  // The Person class sayAge() method returns expected message with person's age
  it("sayAge() method returns expected message with person's age", () => {
    expect(person.sayAge()).toEqual('I am 38 years old');
  });

  // The Person class eatFavoriteFood() method returns expected message with person's favorite food
  it("eatFavoriteFood() method returns expected message with person's favorite food", () => {
    expect(person.eatFavoriteFood()).toEqual('Eating my favorite food, tortellini');
  });

  describe('goToWork() method', () => {
    let message;

    beforeEach(() => {
      message = person.goToWork();
    });

    // The Person class goToWork() method returns expected message with person's workplace
    it("returns expected message with person's workplace", () => {
      expect(message).toEqual('I am heading to work at Elsevier');
    });

    // The Person class goToWork() method sets atWork property to true
    it('sets atWork property to true', () => {
      expect(person.atWork).toEqual(true);
    });

    // The Person class goToWork() method returns expected message when atWork is already true
    it('returns expected message when atWork is already true', () => {
      person.atWork = true;
      message = person.goToWork();
      expect(message).toEqual('I am already at work!');
    });
  });

  describe('haveBirthday() method', () => {
    let message;

    beforeEach(() => {
      message = person.haveBirthday();
    });

    // The Person class haveBirthday() method returns expected message
    it('returns expected message', () => {
      expect(message).toEqual('Today is my birthday!');
    });

    // The Person class haveBirthday() method increments the person's age
    it("increments the person's age", () => {
      expect(person.age).toEqual(39);
    });
  });

  describe('goHome() method', () => {
    let message;

    beforeEach(() => {
      person.atWork = true;
      message = person.goHome();
    });

    // The Person class goHome() method returns expected message
    it('returns expected message', () => {
      expect(message).toEqual('I am heading home');
    });

    // The Person class goHome() method returns expected message if atWork is already false
    it('returns expected message if atWork is already false', () => {
      person.atWork = false;
      message = person.goHome();
      expect(message).toEqual('I am already home!');
    });
  });
});

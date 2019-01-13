const Person = require('../src/2-4-Person');

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Bob', 38, 'software engineer', 'tortellini');
  });

  // Person atWork is false
  it('atWork is false', () => {
    expect(person.atWork).toEqual(false);
  });

  // Person says person's name
  it("says person's name", () => {
    expect(person.sayName()).toEqual('My name is Bob');
  });

  // Person says person's age
  it("says person's age", () => {
    expect(person.sayAge()).toEqual('I am 38 years old');
  });

  // Person says person's favorite food
  it("says person's favorite food", () => {
    expect(person.eatFavoriteFood()).toEqual('Eating my favorite food, tortellini');
  });

  describe('goToWork', () => {
    let message;

    beforeEach(() => {
      message = person.goToWork();
    });

    // Person goToWork says person's occupation
    it("says person's occupation", () => {
      expect(message).toEqual('I am heading to work as a software engineer');
    });

    // Person goToWork atWork is true
    it('atWork is true', () => {
      expect(person.atWork).toEqual(true);
    });

    // Person goToWork already at work message
    it('already at work message', () => {
      person.atWork = true;
      message = person.goToWork();
      expect(message).toEqual('I am already at work!');
    });
  });

  describe('haveBirthday', () => {
    let message;

    beforeEach(() => {
      message = person.haveBirthday();
    });

    // Person haveBirthday happy birthday message
    it('happy birthday message', () => {
      expect(message).toEqual('Today is my birthday!');
    });

    // Person haveBirthday person's age increments
    it("person's age increments", () => {
      expect(person.age).toEqual(39);
    });
  });

  describe('goHome', () => {
    let message;

    beforeEach(() => {
      person.atWork = true;
      message = person.goHome();
    });

    // Person goHome home message
    it('home message', () => {
      expect(message).toEqual('I am heading home');
    });

    // Person goHome already home message
    it('already home message', () => {
      message = person.goHome();
      expect(message).toEqual('I am already home!');
    });
  });
});

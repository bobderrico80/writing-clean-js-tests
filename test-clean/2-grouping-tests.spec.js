const Person = require('../src/2-3-Person');

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Bob', 38, 'Elsevier', 'tortellini');
  });

  it('atWork is false', () => {
    expect(person.atWork).toEqual(false);
  });

  it("says person's name", () => {
    expect(person.sayName()).toEqual('My name is Bob');
  });

  it("says person's age", () => {
    expect(person.sayAge()).toEqual('I am 38 years old');
  });

  it('says favorite food', () => {
    expect(person.eatFavoriteFood()).toEqual('Eating my favorite food, tortellini');
  });

  describe('goToWork', () => {
    let message;

    beforeEach(() => {
      message = person.goToWork();
    });

    it("says person's workplace", () => {
      expect(message).toEqual('I am heading to work at Elsevier');
    });

    it('atWork is true', () => {
      expect(person.atWork).toEqual(true);
    });

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

    it('happy birthday message', () => {
      expect(message).toEqual('Today is my birthday!');
    });

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

    it('home message', () => {
      expect(message).toEqual('I am heading home');
    });

    it('already home message', () => {
      message = person.goHome();
      expect(message).toEqual('I am already home!');
    });
  });
});

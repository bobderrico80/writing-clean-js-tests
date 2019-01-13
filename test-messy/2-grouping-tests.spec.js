const Person = require('../src/2-3-Person');

// Messy way 1 - more than one assertion per test
describe('Person (very messy)', () => {
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

  it("says person's workplace and sets atWork to true", () => {
    expect(person.goToWork()).toEqual('I am heading to work at Elsevier');
    expect(person.atWork).toEqual(true);
  });

  it('already at work message', () => {
    expect(person.goToWork()).toEqual('I am heading to work at Elsevier');
    expect(person.atWork).toEqual(true);
    expect(person.goToWork()).toEqual('I am already at work!');
  });

  it("says person's favorite food", () => {
    expect(person.eatFavoriteFood()).toEqual('Eating my favorite food, tortellini');
  });

  it("says birthday message and increments person's age", () => {
    expect(person.haveBirthday()).toEqual('Today is my birthday!');
    expect(person.age).toEqual(39);
  });

  it('says go home message and sets atHome to false', () => {
    expect(person.goToWork()).toEqual('I am heading to work at Elsevier');
    expect(person.atWork).toEqual(true);
    expect(person.goHome()).toEqual('I am heading home');
    expect(person.atWork).toEqual(false);
  });

  it('says already home message', () => {
    expect(person.goToWork()).toEqual('I am heading to work at Elsevier');
    expect(person.atWork).toEqual(true);
    expect(person.goHome()).toEqual('I am heading home');
    expect(person.atWork).toEqual(false);
    expect(person.goHome()).toEqual('I am already home!');
  });
});

// Messy way 2 - repeated descriptions and function calls
describe('Person (slightly better)', () => {
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

  it("says person's workplace", () => {
    expect(person.goToWork()).toEqual('I am heading to work at Elsevier');
  });

  it('atWork is true', () => {
    person.goToWork();
    expect(person.atWork).toEqual(true);
  });

  it('already at work message', () => {
    person.atWork = true;
    expect(person.goToWork()).toEqual('I am already at work!');
  });

  it("says person's favorite food", () => {
    expect(person.eatFavoriteFood()).toEqual('Eating my favorite food, tortellini');
  });

  it('happy birthday message', () => {
    expect(person.haveBirthday()).toEqual('Today is my birthday!');
  });

  it("person's age increments", () => {
    person.haveBirthday();
    expect(person.age).toEqual(39);
  });

  it('says Go Home message', () => {
    person.atWork = true;
    expect(person.goHome()).toEqual('I am heading home');
  });

  it('says Already Home message', () => {
    expect(person.goHome()).toEqual('I am already home!');
  });
});

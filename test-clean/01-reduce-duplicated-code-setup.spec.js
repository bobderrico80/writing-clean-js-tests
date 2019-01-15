const Person = require('../src/Person');

describe('The Person class', () => {
  let person;

  beforeEach(() => {
    person = new Person('Bob', 38, 'software engineer', 'tortellini');
  });

  it("sayName() method returns expected message with the person's name", () => {
    expect(person.sayName()).toEqual('My name is Bob');
  });

  it("sayAge() method returns expected message with the person's age", () => {
    expect(person.sayAge()).toEqual('I am 38 years old');
  });

  it("goToWork() method returns expected message with the person's occupation", () => {
    expect(person.goToWork()).toEqual('I am heading to work as a software engineer');
  });

  it("eatFavoriteFood() returns expected message with the person's favorite food", () => {
    expect(person.eatFavoriteFood()).toEqual('Eating my favorite food, tortellini');
  });
});

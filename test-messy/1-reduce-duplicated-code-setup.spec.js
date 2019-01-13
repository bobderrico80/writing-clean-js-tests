const Person = require('../src/1-Person');

describe('The Person class', () => {
  it("sayName() method returns expected message with the person's name", () => {
    const person = new Person('Bob', 38, 'Elsevier', 'tortellini');
    expect(person.sayName()).toEqual('My name is Bob');
  });

  it("sayAge() method returns expected message with the person's age", () => {
    const person = new Person('Bob', 38, 'Elsevier', 'tortellini');
    expect(person.sayAge()).toEqual('I am 38 years old');
  });

  it("goToWork() method returns expected message with the person's workplace", () => {
    const person = new Person('Bob', 38, 'Elsevier', 'tortellini');
    expect(person.goToWork()).toEqual('I am heading to work at Elsevier');
  });

  it("eatFavoriteFood() returns expected message with the person's favorite food", () => {
    const person = new Person('Bob', 38, 'Elsevier', 'tortellini');
    expect(person.eatFavoriteFood()).toEqual('Eating my favorite food, tortellini');
  });
});

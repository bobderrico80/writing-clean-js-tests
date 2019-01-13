class Person {
  constructor(name, age, workplace, favoriteFood) {
    this.name = name;
    this.age = age;
    this.workplace = workplace;
    this.favoriteFood = favoriteFood;
  }

  sayName() {
    return `My name is ${this.name}`;
  }

  sayAge() {
    return `I am ${this.age} years old`;
  }

  goToWork() {
    return `I am heading to work at ${this.workplace}`;
  }

  eatFavoriteFood() {
    return `Eating my favorite food, ${this.favoriteFood}`;
  }
}

module.exports = Person;

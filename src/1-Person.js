class Person {
  constructor(name, age, occupation, favoriteFood) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.favoriteFood = favoriteFood;
  }

  sayName() {
    return `My name is ${this.name}`;
  }

  sayAge() {
    return `I am ${this.age} years old`;
  }

  goToWork() {
    return `I am heading to work as a ${this.occupation}`;
  }

  eatFavoriteFood() {
    return `Eating my favorite food, ${this.favoriteFood}`;
  }
}

module.exports = Person;

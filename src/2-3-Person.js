class Person {
  constructor(name, age, workplace, favoriteFood) {
    this.name = name;
    this.age = age;
    this.workplace = workplace;
    this.favoriteFood = favoriteFood;
    this.atWork = false;
  }

  sayName() {
    return `My name is ${this.name}`;
  }

  sayAge() {
    return `I am ${this.age} years old`;
  }

  goToWork() {
    if (this.atWork) {
      return 'I am already at work!';
    }

    this.atWork = true;
    return `I am heading to work at ${this.workplace}`;
  }

  eatFavoriteFood() {
    return `Eating my favorite food, ${this.favoriteFood}`;
  }

  haveBirthday() {
    this.age += 1;
    return 'Today is my birthday!';
  }

  goHome() {
    if (!this.atWork) {
      return 'I am already home!';
    }

    this.atWork = false;
    return 'I am heading home';
  }
}

module.exports = Person;

class Person {
  constructor(name, age, occupation, favoriteFood) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
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
    return `I am heading to work as a ${this.occupation}`;
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

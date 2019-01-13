class PersonManager {
  constructor(persons) {
    this.persons = persons;
  }

  getNames() {
    return this.persons.map(person => person.name);
  }

  getOccupations() {
    return this.persons.map(person => person.occupation);
  }

  isEveryoneAtWork() {
    return this.persons.every(person => person.atWork);
  }

  isEveryoneHome() {
    return this.persons.every(person => !person.atWork);
  }

  giveEveryoneBirthday() {
    this.persons = this.persons.map(person => ({ ...person, age: person.age + 1 }));
  }

  ageEveryoneBy(amountToAge) {
    this.persons = this.persons.map(person => ({ ...person, age: person.age + amountToAge }));
  }
}

module.exports = PersonManager;

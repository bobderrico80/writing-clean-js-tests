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
}

module.exports = PersonManager;

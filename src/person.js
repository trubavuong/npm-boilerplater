class Person {
  constructor(name) {
    this.name = name;
  }

  sayGreeting(targetName) {
    return `Hello ${targetName}! My name is ${this.name}.`;
  }
}

export default Person;

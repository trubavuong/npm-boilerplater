class Person {
  constructor(name) {
    this.name = name;
  }

  sayGreeting(targetName) {
    return `Hello ${targetName}! My name is ${this.name}.`;
  }

  workInSeconds(seconds) {
    return new Promise(resolve => {
      setTimeout(
        () => {
          resolve(`I am ${this.name}. I have done in ${seconds} seconds.`);
        },
        seconds * 1000,
      );
    });
  }
}

export default Person;

import Person from './person';

describe('person.js', () => {
  describe('Person', () => {
    describe('sayGreeting()', () => {
      it('should work', () => {
        const person = new Person('Steven');
        const greetingMessage = person.sayGreeting('Mary');
        expect(greetingMessage).toEqual('Hello Mary! My name is Steven.');
      });
    });

    describe('workInSeconds()', () => {
      it('should work', async () => {
        const person = new Person('Steven');
        const finalMessage = await person.workInSeconds(5);
        expect(finalMessage).toEqual('I am Steven. I have done in 5 seconds.');
      }, 10e3);
    });
  });
});

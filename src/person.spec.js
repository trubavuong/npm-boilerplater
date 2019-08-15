import { expect } from 'chai';

import Person from './person';

describe('person.js', () => {
  describe('Person', () => {
    describe('sayGreeting()', () => {
      it('should work', () => {
        const person = new Person('Steven');
        const greetingMessage = person.sayGreeting('Mary');
        expect(greetingMessage).to.equal('Hello Mary! My name is Steven.');
      });
    });
  });
});

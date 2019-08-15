import { expect } from 'chai';

import Person from './person';
import IndexPerson from './index';

describe('index.js', () => {
  describe('Person', () => {
    it('should be exported correctly', () => {
      expect(Person).to.equal(IndexPerson);
    });
  });
});

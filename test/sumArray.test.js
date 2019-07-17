const expect2 = require('chai').expect;
const sum = require('../sumArray');

describe('Array sum', () => {
  it('should return a promise', () => {
    expect2(sum([1,2,3])).to.be.a('promise');
  });

  it('should sum an array of numbers', () => {
    return sum([1,2,3])
      .then(ans => {
        expect2(ans).to.equal(6);
      });
  });
});
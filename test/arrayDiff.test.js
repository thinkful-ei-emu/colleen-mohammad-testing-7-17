const expect1 = require('chai').expect;
const diff = require('../arrayDiff');

describe( 'Array diff', ()=>
{
  it('it should return a if no common elements', () => {
      expect1(diff([4,5,6], [7,9,2])).to.deep.equal([4,5,6]);
  });
});
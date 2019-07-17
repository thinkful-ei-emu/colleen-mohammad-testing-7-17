const expect = require('chai').expect
const sort = require('../sort.js')

describe('Sort', ()=>{
  it('correctly sorts an array of integers in ascending order', ()=>{
    const array = [3, -1, 8, 5, 2, 0], expectedAnswer =[-1, 0, 2, 3, 5, 8]
    const actualAnswer = sort(array)

    expect(actualAnswer).to.deep.equal(expectedAnswer)
  })
  
})
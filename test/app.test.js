const divide = require('../app.js')
const expect = require('chai').expect


describe('Divide', ()=>{
  it('correctly divides positive integers correctly', ()=>{
    const a = 8, b = 4, expectedAnswer = 2
    const actualAnswer = divide(a,b)

    expect(actualAnswer).to.equal(expectedAnswer)
  })
  it('should return error if b is 0', ()=>{

const b = 0, a = 8
const fn = ()=>{divide(a,b)}
expect(fn).to.throw()
  })
})

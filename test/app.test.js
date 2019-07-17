const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('Express App', () => {
  it('GET/ should return a message',  ()=>{
    return request(app)
      .get('/')
      .expect(200, 'Hello Express!');
  });
});

describe('GET /sum', () => {
  it('8/4 should be 2', () => {
    return request(app)
      .get('/sum')
      .query({a: 8, b:4})
      .expect(200, '8 divided by 4 is 2');
  });

  it('should return 400 if a is missing', () => {
    return request(app)
      .get('/sum')
      .query({b: 4})
      .expect(400, 'Value for a is needed');
  });
});

describe('GET /generate endpoint', () => {
  it('should generate an array of 5', () => {
    return request(app)
      .get('/generate') // invoke the endpoint
      .query({n:5}) // send the query string ?n=5
      .expect(200)  //assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      .then(res => {
        //expect(res.body).to.be.a('array'); // make sure you get an array
        expect(res.body).to.have.lengthOf.at.least(1); // array must not be empty
        //expect(res.body).to.eql([1,2,3,4,5]); // this assertion fails 
        //expect(res.body).to.include.members([1,2,3,4,5]);  
        expect(res.body).to.be.an('array').that.have.members([1,2,3,4,5]);
      });
  });
});


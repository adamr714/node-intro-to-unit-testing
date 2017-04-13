const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer.js');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return "fizz-buzzer" for muliples of 15', function() {
    [15, 30, 45].forEach(function(input) {
        fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return "buzz" for muliples of 5', function() {
    [5, 10, 20].forEach(function(input) {
        fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should return "fizz" for muliples of 3', function() {
    [3, 6, 9, 12, 18].forEach(function(input) {
        fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('should return a number if not a mulitpe of 3, 5 or 15', function() {
    [1, 2, 4, 7, 8].forEach(function(input) {
        fizzBuzzer(input).should.equal(input);
    });
  });

   it('should produce error if input isn\'t number', function() {
    const badInputs = [true, 'string']
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
const { describe, it } = require('mocha');
const { expect } = require('chai');
const fizzBuzz = require('../src/fizzBuzz');

describe('fizzBuzz()', function() {
  it('evaluates 1 to "1"', function() {
    const result = fizzBuzz(1);
    expect(result).to.equal('1');
  });

  it('evaluates 2 to "2"', function() {
    const result = fizzBuzz(2);
    expect(result).to.equal('2');
  });

  it('evaluates 3 to "Fizz"', function() {
    const result = fizzBuzz(3);
    expect(result).to.equal('Fizz');
  });

  it('evaluates 5 to "Buzz"', function() {
    const result = fizzBuzz(5);
    expect(result).to.equal('Buzz');
  });

  it('evaluates 6 to "Fizz"', function() {
    const result = fizzBuzz(6);
    expect(result).to.equal('Fizz');
  });

  it('evaluates 10 to "Buzz"', function() {
    const result = fizzBuzz(10);
    expect(result).to.equal('Buzz');
  });

  it('evaluates 15 to "FizzBuzz"', function() {
    const result = fizzBuzz(15);
    expect(result).to.equal('FizzBuzz');
  });
});

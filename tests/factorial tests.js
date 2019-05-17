/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

const assert = require('assert');
const chai = require('chai');
const { expect } = require('chai');
const calculateFactorial = require('../computerFactorial');

const should = chai.should();

describe('Test if factorial is working very well ', () => {
  it('it should return 120 for factorial of 5', () => {
    calculateFactorial(5).should.equal(120);
  });
  it('it should return 6 for factorial of 3', () => {
    calculateFactorial(3).should.equal(6);
  });
  it('The factorial of 0 is 1', () => {
    calculateFactorial(0).should.equal(1);
  });
  it('The factorial of one is one', () => {
    calculateFactorial(1).should.equal(1);
  });
  it('Cannot calculate factorial of undefinned', () => {
    calculateFactorial().should.equal(-1);
  });
  it('Cannot calculate factorial of a string', () => {
    calculateFactorial('ll').should.equal(-1);
  });
  it('Cannot calculate factorial for negative number', () => {
    calculateFactorial(-5).should.equal(-1);
  });
  it(' The double factorial of 3 is 720', () => {
    calculateFactorial(calculateFactorial(3)).should.equal(720);
  });
  it(' n!/n = (n-1)!', () => {
    (calculateFactorial(3) / 3).should.equal(calculateFactorial(3 - 1));
  });
  it('it should calculate a double factorial', () => {
    (calculateFactorial(6, true)).should.equal(48);
  });
  it('it should check this factorial property (n!/n!!) = (n-1)!! ', () => {
    (calculateFactorial(3) / calculateFactorial(3, true)).should.equal(calculateFactorial(2, true));
  });
});

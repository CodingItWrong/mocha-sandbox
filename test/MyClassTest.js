const {describe, it} = require('mocha');
const {expect} = require('chai');
const MyClass = require('../src/MyClass');

describe('MyClass', function() {
  describe('#sayHello()', function() {
    it('should say hello', function() {
      const subject = new MyClass();
      expect(subject.sayHello()).to.equal('hello');
    });
  });
});

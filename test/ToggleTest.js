const {describe, beforeEach, it} = require('mocha');
const {expect} = require('chai');
const {spy} = require('sinon');
const Toggle = require('../src/Toggle');

describe('Toggle', () => {
  let toggle, onHandler, offHandler;

  beforeEach(() => {
    onHandler = spy();
    offHandler = spy();
    toggle = new Toggle(onHandler, offHandler);
  });

  describe('default state', () => {
    it('is off', () => {
      expect(toggle.isOn()).to.be.false;
    });
  });

  describe('toggling once', () => {
    beforeEach(() => {
      toggle.toggle();
    });

    it('is on', () => {
      expect(toggle.isOn()).to.be.true;
    });

    it('calls the onHandler', () => {
      expect(onHandler.calledOnce).to.be.true;
    });
  });

  describe('toggling twice', () => {
    beforeEach(() => {
      toggle.toggle();
      toggle.toggle();
    });

    it('is off', () => {
      expect(toggle.isOn()).to.be.false;
    });

    it('calls the onHandler', () => {
      expect(onHandler.calledOnce).to.be.true;
    });

    it('calls the offHandler', () => {
      expect(offHandler.calledOnce).to.be.true;
    });
  });
});

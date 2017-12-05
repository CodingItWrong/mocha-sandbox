import {describe, beforeEach, it} from 'mocha';
import {expect} from 'chai';
import {spy} from 'sinon';
import Toggle from '../src/Toggle';

describe('Toggle', function() {
  let toggle, onHandler, offHandler;

  beforeEach(function() {
    onHandler = spy();
    offHandler = spy();
    toggle = new Toggle(onHandler, offHandler);
  });

  describe('default state', function() {
    it('is off', function() {
      expect(toggle.isOn()).to.be.false;
    });
  });

  describe('toggling once', function() {
    beforeEach(function() {
      toggle.toggle();
    });

    it('is on', function() {
      expect(toggle.isOn()).to.be.true;
    });

    it('calls the onHandler', function() {
      expect(onHandler.calledOnce).to.be.true;
    });
  });

  describe('toggling twice', function() {
    beforeEach(function() {
      toggle.toggle();
      toggle.toggle();
    });

    it('is off', function() {
      expect(toggle.isOn()).to.be.false;
    });

    it('calls the onHandler', function() {
      expect(onHandler.calledOnce).to.be.true;
    });

    it('calls the offHandler', function() {
      expect(offHandler.calledOnce).to.be.true;
    });
  });
});

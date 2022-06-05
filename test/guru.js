const assert = require('assert');
const data = require('../');

describe('furkot guru data', function () {
  it('should be an object', function () {
    assert.equal(typeof data.toFurkot, 'object');
    assert.equal(typeof data.toGuru, 'object');
    assert.equal(typeof data.toGalileo, 'object');
    assert.equal(typeof data.colors, 'object');
  });


  it('should be consistent', function () {
    assert(data.toGalileo === data.toGuru);
    Object
      .entries(data.toFurkot)
      .forEach(
        ([guruIcon, furkotIcon]) => assert.equal(guruIcon, data.toGuru[furkotIcon])
      );
  });

});

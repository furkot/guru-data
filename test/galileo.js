const assert = require('assert');
const data = require('../');

describe('furkot galileo data', function () {
  it('should be an object', function () {
    assert.equal(typeof data.toFurkot, 'object');
    assert.equal(typeof data.toGalileo, 'object');
    assert.equal(typeof data.colors, 'object');
  });


  it('should be consistent', function () {
    Object
      .entries(data.toFurkot)
      .forEach(
        ([galileoIcon, furkotIcon]) => assert.equal(galileoIcon, data.toGalileo[furkotIcon])
      );
  });

});

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
    Object.entries(Object
      .entries(data.toGuru)
      .reduce((result, [, guruIcon]) => {
        result[guruIcon] = result[guruIcon] || 0;
        result[guruIcon] += 1;
        return result;
      }, {}))
      .forEach(([guruIcon, counter]) => {
        if (counter > 1) {
          const furkotIcon = data.toFurkot[guruIcon];
          assert(furkotIcon !== undefined, `Guru ${guruIcon}`);
          assert(data.toGuru[furkotIcon].toString() === guruIcon, `Guru ${guruIcon}`);
        }
        else {
          assert(data.toFurkot[guruIcon] === undefined);
        }
      });
    });
});

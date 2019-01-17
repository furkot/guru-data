var data = require('../');

describe('furkot galileo data', function () {
  it('should be an object', function () {
    data.should.have.property('toFurkot').be.type('object');
    data.should.have.property('toGalileo').be.type('object');
    data.should.have.property('colors').be.type('object');
  });


  it('should be consistent', function () {
    Object
    .keys(data.toFurkot)
    .forEach(function(galileoIcon) {
      var furkotIcon = data.toFurkot[galileoIcon];
      galileoIcon.should.eql('' + data.toGalileo[furkotIcon]);
    });
  });

});

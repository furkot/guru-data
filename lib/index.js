const {
  toGuru,
  toFurkot,
  colors,
  toFurkotColors
} = require('./data');
const sprite = require('./sprite');

function getWptType(st) {
  return toGuru[st.sym];
}

function getTrkType(tr) {
  return colors[tr.color];
}

module.exports = {
  getWptType,
  getTrkType,
  toGuru,
  toGalileo: toGuru,
  toFurkot,
  colors,
  toFurkotColors,
  sprite
};

// test/indexTest.js

const assert = require('assert');
const { Polygon, Triangle, Square } = require('../index'); // adjust the path accordingly

describe('Polygon', function () {
  let polygon;

  beforeEach(function () {
    polygon = new Polygon([3, 4, 5]);
  });

  it('has a Polygon class', function () {
    assert.strictEqual(typeof Polygon, 'function');
  });

  it('has a perimeter getter', function () {
    assert.strictEqual(polygon.perimeter, 12);
  });

  // Add more test cases as needed
});



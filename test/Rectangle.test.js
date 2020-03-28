const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('isSquare', () => {
    it('send back true if a equal b', () => {
        const rectangle = new Rectangle(3, 3);
        assert.strictEqual(rectangle.isSquare, true);
    });
    it('send back false if a not equal b', () => {
        const rectangle = new Rectangle(4, 6);
        assert.strictEqual(rectangle.isSquare, false);
    });
});

describe('getArea', () => {
    it('send back the right area', () => {
        const rectangle = new Rectangle(5, 5);
        assert.strictEqual(rectangle.getArea, 25);
    });
});

describe('getPerimeter', () => {
    it('send back the right perimeter', () => {
        const rectangle = new Rectangle(3, 7);
        assert.strictEqual(rectangle.getPerimeter, 20);
    });
});
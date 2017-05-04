const assert = require('chai').assert;
const bubbleSort = require('./index');

describe('Merge Sorting', () => {
    describe('Empty array', () => {
        it('should return empty array', () => {
            assert.deepEqual(bubbleSort([]), []);
        });
    });

    describe('Sorting logic', () => {
        it('should work correctly with even count array', () => {
            assert.deepEqual([0, 1, 2, 3, 4], bubbleSort([2, 1, 3, 4, 0]));
        });

        it('should work correctly with odd count array', () => {
            assert.deepEqual([1, 2, 3], bubbleSort([2, 1, 3]));
        });

        it('should work correctly with negative values', () => {
            assert.deepEqual([-3, -2, -1], bubbleSort([-1, -2, -3]));
        });

        it('should work correctly with not unique values', () => {
            assert.deepEqual([1, 2, 2, 3, 4], bubbleSort([3, 2, 4, 1, 2]));
        });
    });
});
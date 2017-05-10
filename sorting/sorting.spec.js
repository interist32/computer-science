const assert = require('chai').assert;

const sortings = [
    require('./bubble'),
    require('./merge'),
    require('./insertion'),
];

sortings.forEach(sortingFunction => {
    describe(`Sorting test cases for ${sortingFunction.name}`, () => {
        describe('Empty array', () => {
            it('should return empty array', () => {
                assert.deepEqual(sortingFunction([]), []);
            });
        });

        describe('Sorting logic', () => {
            it('should work correctly with even count array', () => {
                assert.deepEqual([1, 2, 3, 4], sortingFunction([2, 1, 3, 4]));
            });

            it('should work correctly with odd count array', () => {
                assert.deepEqual([1, 2, 3], sortingFunction([2, 1, 3]));
            });

            it('should work correctly with negative values', () => {
                assert.deepEqual([-3, -2, -1], sortingFunction([-1, -2, -3]));
            });

            it('should work correctly with not unique values', () => {
                assert.deepEqual([1, 2, 2, 3, 4], sortingFunction([3, 2, 4, 1, 2]));
            });
        });
    });
});
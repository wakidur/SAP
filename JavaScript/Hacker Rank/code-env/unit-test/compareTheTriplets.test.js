const {compareTheTriplets} = require('../algorithms/compare-the-triplets')

test('Compare The Triplets', () => {
    expect(compareTheTriplets([1, 28, 30], [99, 16, 1])).toBe([ 2, 1 ]);
});

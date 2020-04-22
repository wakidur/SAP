const {
    compareTheTriplets, 
    generateText
} = require('../algorithms/compare-the-triplets')

test('Compare The Triplets', () => {
    const compareTriplets = compareTheTriplets([1, 28, 30], [99, 16, 1]);
    expect(compareTriplets).toStrictEqual([ 2, 1 ]);
});

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});



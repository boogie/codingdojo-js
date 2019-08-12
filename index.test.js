let sum = require('./index');
const expectations = [
    [1, 1, 2],
    [2, 1, 3]
];

describe('test sum function', () => {
    test.each(expectations)('sum(%i, %i) should return %i', (a, b, result) => {
        expect(sum(a, b)).toEqual(result);
    });
});

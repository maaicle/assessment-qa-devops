const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("Return an Array", () => {
        expect(shuffleArray([])).toEqual([]);
    });

    test("return the same length as the argument passed", () => {
        expect(shuffleArray([1, 2, 3]).length).toEqual(3);
    });

})
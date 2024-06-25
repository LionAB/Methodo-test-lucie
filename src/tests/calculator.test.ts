import {stringCalculator} from '../calculator';

describe('String Calculator', () => {
  it('should return a number', () => {
    expect(typeof stringCalculator('1')).toBe('number');
  });
    it('should return 0 when input is an empty string', () => {
        expect(stringCalculator('')).toBe(0);
    });
    it('should return the input if it\'s a number', () => {
        expect(stringCalculator('1')).toBe(1);
    });
    it('should return the sum of the string or numbers when they are separated by a coma', () => {
        expect(stringCalculator('2, 2')).toBe(4);
    });
    it("should return the sum of the numbers when they conatains '\n'", () => {
        expect(stringCalculator('1\n2,3')).toBe(6);
    });
});
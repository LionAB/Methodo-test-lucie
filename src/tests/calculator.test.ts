import {stringCalculator} from '../calculator';

describe('String Calculator', () => {
  it('should return a number', () => {
    expect(typeof stringCalculator('coucou')).toBe('number');
  });
    it('should return 0 when input is an empty string', () => {
        expect(stringCalculator('')).toBe(0);
    });
});
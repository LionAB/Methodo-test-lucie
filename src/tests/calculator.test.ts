import {stringCalculator} from '../calculator';

describe('String Calculator', () => {
  it('should return a number', () => {
    expect(typeof stringCalculator('coucou')).toBe('number');
  });
});
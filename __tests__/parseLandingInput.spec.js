import { parseLandingIpnut } from '../src/parseLandingInput';
import testDataSet from '../testData/testDataSet';

describe('Parse input', () => {
  test('interpret sample values correctly', () => {
    const input = testDataSet.input;

    const output = testDataSet.parsedInput;

    expect(parseLandingIpnut(input)).toEqual(output);
  });
});

describe('Parse nonsense input', () => {
  test('Return error', () => {
    const input = 'djskald skal jdskla lsdasdsadsa';

    const output = Error('Invalid input');

    try {
      const result = parseLandingIpnut(input);
    } catch (err) {
      expect(err).toEqual(output);
    }
  });
});

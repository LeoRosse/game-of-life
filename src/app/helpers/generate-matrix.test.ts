import { generateMatrix } from './generate-matrix';

test('`generateMatrix` generate a random matrix populate with zero and one', () => {
  expect(generateMatrix(2, 2)[0]).toHaveLength(2);
});

test('`generateMatrix` matrix must have value or zero or one', () => {
  expect(generateMatrix(2, 2)[0][0]).toBeLessThanOrEqual(1);
});

test('`generateMatrix` performance test', () => {
  const matrix = generateMatrix(10, 10);
  expect(matrix).toHaveLength(10);
});

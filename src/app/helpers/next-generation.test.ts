import { Matrix } from '../models/matrix';
import { nextGeneration } from './next-generation';

const matrix: Matrix = [
  [0, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

const outputMatrix: Matrix = [
  [0, 1, 1, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
];

test('`nextGeneration` generate a new matrix based on rules of game of life', () => {
  expect(nextGeneration(matrix)).toMatchObject(outputMatrix);
});

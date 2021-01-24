import { Matrix } from '../models/matrix';
import { neighborhoodCellAliveCounter } from './neighborhood-cell-alive-counter';

const matrix: Matrix = [
  [0, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

test('`neighborhoodCellAliveCounter` calculate number cells alives in neighborhood of cell in matrix', () => {
  expect(neighborhoodCellAliveCounter(matrix, 1, 2)).toBe(4);
});

const matrixTwo: Matrix = [
  [0, 1, 1, 0, 1, 0, 1, 1],
  [0, 1, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0],
];

test('`neighborhoodCellAliveCounter` applicate with square', () => {
  expect(neighborhoodCellAliveCounter(matrixTwo, 0, 1)).toBe(3);
});

test('`neighborhoodCellAliveCounter` applicate randomly', () => {
  expect(neighborhoodCellAliveCounter(matrixTwo, 1, 5)).toBe(4);
});

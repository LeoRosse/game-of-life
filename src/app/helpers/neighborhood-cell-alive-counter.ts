import { Matrix } from '../models/matrix';
import { neighborhoodOfCell } from './neighborhood-of-cell';

export const neighborhoodCellAliveCounter = (
  matrix: Matrix,
  rowIndex: number,
  coloumnIndex: number,
): number =>
  neighborhoodOfCell(rowIndex).reduce((acc, i) => {
    const nRows = matrix.length;
    const nColoumns = matrix[0].length;

    neighborhoodOfCell(coloumnIndex).map((j) => {
      const isCell = rowIndex === i && coloumnIndex === j;
      if (i >= 0 && i < nRows && j >= 0 && j < nColoumns) {
        if (matrix[i][j] === 1 && !isCell) {
          acc = acc + 1;
        }
      }
    });
    return acc;
  }, 0);

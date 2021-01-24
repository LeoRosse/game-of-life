import { Matrix } from 'src/app/models/matrix';
import { neighborhoodOfCell } from './neighborhood-of-cell';

export const neighborhoodCellAliveCounter = (
  matrix: Matrix,
  rowIndex: number,
  columnIndex: number,
): number =>
  neighborhoodOfCell(rowIndex).reduce((acc, i) => {
    const nRows = matrix.length;
    const nColumns = matrix[0].length;

    neighborhoodOfCell(columnIndex).map((j) => {
      const isCell = rowIndex === i && columnIndex === j;
      if (i >= 0 && i < nRows && j >= 0 && j < nColumns) {
        if (matrix[i][j] === 1 && !isCell) {
          acc = acc + 1;
        }
      }
    });
    return acc;
  }, 0);

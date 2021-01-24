import { Matrix } from 'src/app/models/matrix';
import { evaluateCell } from './evaluate-cell';
import { neighborhoodCellAliveCounter } from './neighborhood-cell-alive-counter';

export const nextGeneration = (matrix: Matrix) =>
  matrix.map((row, rowIndex) =>
    row.map((_, colIndex) =>
      evaluateCell(
        neighborhoodCellAliveCounter(matrix, rowIndex, colIndex),
        matrix[rowIndex][colIndex],
      ),
    ),
  );

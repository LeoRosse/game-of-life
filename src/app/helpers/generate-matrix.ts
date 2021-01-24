import { Matrix } from 'src/app/models';

const nRows: number = 7;
const nCols: number = 45;

export const generateMatrix = (
  rows: number = nRows,
  column: number = nCols,
): Matrix =>
  [...Array(rows)].map(() =>
    [...Array(column)].map(() => {
      return Math.round(Math.random()) as 0 | 1;
    }),
  );

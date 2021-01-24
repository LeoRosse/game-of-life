import { Matrix } from '../models';

const nRows: number = 7;
const nCols: number = 45;

export const generateMatrix = (
  rows: number = nRows,
  coloumn: number = nCols,
): Matrix =>
  [...Array(rows)].map(() =>
    [...Array(coloumn)].map(() => {
      return Math.round(Math.random()) as 0 | 1;
    }),
  );

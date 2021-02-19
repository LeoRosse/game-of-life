import { evaluateCell } from '../helpers/evaluate-cell';
import { Cell } from '../models';
import { neighborhoodCellAliveCounter } from './neighborhood-cell-alive-counter';
import { neighborhoodOfCell } from './neighborhood-of-cell';

export const nextGeneration = (array: Cell[], nCols: number): Cell[] =>
  array.reduce<Cell[]>((acc, curr, i) => {
    const arrayOfNeighbors = neighborhoodOfCell(array, i, nCols);
    const cellAlive = neighborhoodCellAliveCounter(arrayOfNeighbors);
    curr = evaluateCell(cellAlive, curr);
    return [...acc, curr];
  }, []);

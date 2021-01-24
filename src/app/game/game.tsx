import * as React from 'react';
import { Board, Cell } from '../components/';
import { generateMatrix, nextGeneration } from '../helpers';
import { Matrix } from '../models';

const drawMatrix = (matrix: Matrix): JSX.Element[][] =>
  matrix.map((row, i) =>
    row.map((_, j) => <Cell key={`${i}|${j}`} alive={matrix[i][j] === 1} />),
  );

const Game: React.FC<Record<string, unknown>> = () => {
  const [matrix, setMatrix] = React.useState<Matrix>(generateMatrix());

  React.useEffect(() => {
    const gameLoop = setInterval(() => {
      setMatrix(nextGeneration(matrix));
    }, 1000);

    return () => {
      clearInterval(gameLoop);
    };
  }, [matrix]);

  return (
    <Board nColoumns={matrix[0].length} nRows={matrix.length}>
      {drawMatrix(matrix)}
    </Board>
  );
};

export { Game };

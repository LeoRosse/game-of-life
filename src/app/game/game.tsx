import * as React from 'react';
import styled from 'styled-components';
import { Board, Cell } from '../components/';
import { FileParser } from '../components/file-parser';
import { generateMatrix, nextGeneration } from '../helpers';
import { Matrix } from '../models';

const drawMatrix = (matrix: Matrix): JSX.Element[][] =>
  matrix.map((row, i) =>
    row.map((_, j) => <Cell key={`${i}|${j}`} alive={matrix[i][j] === 1} />),
  );

const GameContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Game: React.FC<Record<string, unknown>> = () => {
  const [matrix, setMatrix] = React.useState<Matrix>(generateMatrix());

  React.useEffect(() => {
    const gameLoop = setInterval(() => {
      setMatrix(nextGeneration(matrix));
    }, 1000);

    return () => {
      clearInterval(gameLoop);
    };
  });

  return (
    <GameContainer>
      <Board nColumns={matrix[0].length} nRows={matrix.length}>
        {drawMatrix(matrix)}
      </Board>
      <FileParser setMatrix={setMatrix} />
    </GameContainer>
  );
};

export { Game };

import * as React from 'react';
import styled from 'styled-components';
import { Board, Cell } from 'src/app/components/';
import { generateArray, nextGeneration } from 'src/app/helpers-optimization';
import { Cell as CellModel } from 'src/app/models';

export const drawMatrix = (
  array: CellModel[],
  nColumns: number,
): JSX.Element[] =>
  array.map((element, i) => (
    <Cell key={i} alive={element === 1} nColumns={nColumns} />
  ));

const GameContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #320e3b;
`;

const Game: React.FC<Record<string, unknown>> = () => {
  const [array, setArray] = React.useState<CellModel[]>(generateArray());

  React.useEffect(() => {
    const gameLoop = setInterval(() => {
      setArray(nextGeneration(array, 45));
    }, 1000);

    return () => {
      clearInterval(gameLoop);
    };
  });

  return (
    <GameContainer>
      <Board>{drawMatrix(array, 45)}</Board>
      {/* <FileParser setArray={setArray} /> */}
    </GameContainer>
  );
};

export { Game };

import * as React from 'react';
import styled from 'styled-components';
import { Board, Cell, Form } from 'src/app/components/';
import { generateArray, nextGeneration } from 'src/app/helpers-optimization';
import { Cell as CellModel } from 'src/app/models';

export const drawMatrix = (
  array: CellModel[] | undefined,
  nColumns: number | undefined,
): JSX.Element[] | undefined =>
  array?.map((element, i) => (
    <Cell key={i} alive={element === 1} nColumns={nColumns} />
  ));

const GameContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #320e3b;
`;

const Game: React.FC<Record<string, unknown>> = () => {
  const [array, setArray] = React.useState<CellModel[]>();
  const [gameColumns, setGameColumns] = React.useState<number>();
  const [gameRows, setGameRows] = React.useState<number>();

  React.useEffect(() => {
    if (!gameColumns || !gameRows) return;
    const arrayLength = gameColumns * gameRows;
    setArray(generateArray(arrayLength));
  }, [gameColumns, gameRows]);

  React.useEffect(() => {
    const gameLoop = setInterval(() => {
      setArray(nextGeneration(array, gameColumns));
    }, 1000);

    return () => {
      clearInterval(gameLoop);
    };
  });

  return (
    <GameContainer>
      {(!gameColumns || !gameRows) && !array ? (
        <Form
          setGameColumns={setGameColumns}
          setGameRows={setGameRows}
          setArray={setArray}
        />
      ) : (
        <Board>{drawMatrix(array, gameColumns)}</Board>
      )}
    </GameContainer>
  );
};

export { Game };

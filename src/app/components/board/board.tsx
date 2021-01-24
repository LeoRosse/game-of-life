import * as React from 'react';
import styled from 'styled-components';

export interface BoardProps {
  nRows: number;
  nColoumns: number;
}

const BoardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  gap: 0.4rem;
`;

const Board: React.FC<BoardProps> = ({ children, nColoumns, nRows }) => (
  <BoardContainer
    style={{
      gridTemplateRows: `repeat(${nRows}, 1fr)`,
      gridTemplateColumns: `repeat(${nColoumns}, 1fr)`,
    }}
  >
    {children}
  </BoardContainer>
);

export { Board };

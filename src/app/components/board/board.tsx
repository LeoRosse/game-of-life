import * as React from 'react';
import styled from 'styled-components';

export interface BoardProps {
  nRows: number;
  nColumns: number;
}

const BoardContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 0.4rem;
`;

const Board: React.FC<BoardProps> = ({ children, nColumns, nRows }) => (
  <BoardContainer
    style={{
      gridTemplateRows: `repeat(${nRows}, 1fr)`,
      gridTemplateColumns: `repeat(${nColumns}, 1fr)`,
    }}
  >
    {children}
  </BoardContainer>
);

export { Board };

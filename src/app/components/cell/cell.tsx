import * as React from 'react';
import styled from 'styled-components';

export interface CellProps {
  alive: boolean;
  nColumns: number;
}

const liveColor = '#FE019A';
const deadColor = '#069AF3';

const CellContainer = styled.div<CellProps>`
  width: ${(props) => `${100 / props.nColumns}%`};
  height: 25px;
  border: 5px solid #320e3b;
  background-color: ${(props) => (props.alive ? liveColor : deadColor)};
  box-sizing: border-box;
`;

const Cell: React.FC<CellProps> = ({ alive, nColumns }) => (
  <CellContainer alive={alive} nColumns={nColumns} />
);

export { Cell };

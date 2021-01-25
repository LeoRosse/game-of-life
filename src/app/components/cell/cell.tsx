import * as React from 'react';
import styled from 'styled-components';

export interface CellProps {
  alive: boolean;
}

const liveColor = '#FE019A';
const deadColor = '#069AF3';

const CellContainer = styled.div<CellProps>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.alive ? liveColor : deadColor)};
`;

const Cell: React.FC<CellProps> = ({ alive }) => (
  <CellContainer alive={alive} />
);

export { Cell };

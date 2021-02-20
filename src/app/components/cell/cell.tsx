import * as React from 'react';
import styled from 'styled-components';

export interface CellProps {
  alive: boolean;
  className?: string;
  nColumns: number | undefined;
  onClick: () => void;
}

const liveColor = '#FE019A';
const deadColor = '#069AF3';

const CellElement: React.FC<CellProps> = ({ className, onClick }) => (
  <button type="button" className={className} onClick={onClick} />
);

const CellContainer = styled(CellElement)`
  width: ${(props) => `${100 / props.nColumns!}%`};
  height: 25px;
  border: 5px solid #320e3b;
  background-color: ${(props) => (props.alive ? liveColor : deadColor)};
  box-sizing: border-box;
`;

const Cell: React.FC<CellProps> = ({ alive, nColumns, onClick }) => (
  <CellContainer alive={alive} nColumns={nColumns} onClick={onClick} />
);

export { Cell };

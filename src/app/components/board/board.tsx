import * as React from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 20px 0;
`;

const Board: React.FC<Record<string, unknown>> = ({ children }) => (
  <BoardContainer>{children}</BoardContainer>
);

export { Board };

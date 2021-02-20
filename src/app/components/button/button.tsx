import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  className?: string;
  onClick: () => void;
}

const ButtonElement: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const Button = styled(ButtonElement)`
  background: 'palevioletred';
  color: 'white';
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export { Button };

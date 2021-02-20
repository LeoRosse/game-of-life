import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  className?: string;
  triggerEvent: () => void;
}

const ButtonElement: React.FC<ButtonProps> = ({
  className,
  children,
  triggerEvent,
}) => (
  <button
    type="button"
    className={className}
    onClick={triggerEvent}
    onKeyPress={triggerEvent}
  >
    {children}
  </button>
);

const Button = styled(ButtonElement)`
  background: #4c2a85;
  color: #fe019a;
  font-size: 1em;
  margin: 1em;
  padding: 1em 1.5em;
  border: 2px solid #4c2a85;
  border-radius: 3px;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
`;

export { Button };

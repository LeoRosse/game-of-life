import * as React from 'react';
import styled from 'styled-components';

export interface InputProps {
  className?: string;
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const InputElement: React.FC<InputProps> = ({ className, onChange }) => (
  <input
    className={className}
    onChange={(e) => onChange(e.target.value)}
    type="text"
  />
);

const Input = styled(InputElement)`
  padding: 0.5em;
  margin: 0.5em;
  color: #fe019a;
  background: #4c2a85;
  border: none;
  border-radius: 3px;
  width: 10%;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

export { Input };

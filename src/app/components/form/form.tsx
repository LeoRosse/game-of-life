import * as React from 'react';
import { Cell } from 'src/app/models';
import styled from 'styled-components';
import { Button, Input, Parser } from '..';

export interface FormProps {
  setArray: React.Dispatch<React.SetStateAction<Cell[] | undefined>>;
  setGameColumns: React.Dispatch<React.SetStateAction<number | undefined>>;
  setGameRows: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fe019a;
  font-size: 40px;
  text-transform: uppercase;
`;

const Text = styled.p`
  color: #fe019a;
  font-size: 20px;
`;

const Form: React.FC<FormProps> = ({
  setArray,
  setGameColumns,
  setGameRows,
}) => {
  const [rows, setRows] = React.useState<string>();
  const [columns, setColumns] = React.useState<string>();

  return (
    <FormContainer>
      <Title>A journey in... the game of life</Title>
      <Text>Define how many rows and columns the matrix must have:</Text>
      <InputContainer>
        <Input onChange={setRows} />
        <Text>X</Text>
        <Input onChange={setColumns} />
      </InputContainer>
      <Text>Or</Text>
      {!rows || !columns ? (
        <Parser setArray={setArray} setGameColumns={setGameColumns} />
      ) : (
        <Button
          triggerEvent={() => {
            if (!columns || !rows) return;
            setGameColumns(parseInt(columns));
            setGameRows(parseInt(rows));
          }}
        >
          Start!
        </Button>
      )}
    </FormContainer>
  );
};

export { Form };

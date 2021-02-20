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
`;

const Title = styled.h1`
  color: #fe019a;
  font-size: 40px;
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
      <Input onChange={setRows} />
      <Input onChange={setColumns} />
      Or
      {!rows || !columns ? (
        <Parser setArray={setArray} setGameColumns={setGameColumns} />
      ) : (
        <Button
          onClick={() => {
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

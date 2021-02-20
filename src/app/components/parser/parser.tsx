import * as React from 'react';
import styled from 'styled-components';
import { Cell } from 'src/app/models';

export interface FileParserArrayProps {
  className?: string;
  setArray: React.Dispatch<React.SetStateAction<Cell[] | undefined>>;
  setGameColumns: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const FileParserArray: React.FC<FileParserArrayProps> = ({
  className,
  setArray,
  setGameColumns,
}) => {
  const [inputArray, setInputArray] = React.useState<Cell[]>();
  const [cols, setCols] = React.useState<number>();

  const showFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = async () => {
      const textSplitted = reader.result?.toString().split('\n');
      const columnsFromInputFile = parseInt([...textSplitted![1]][2]);
      await setCols(columnsFromInputFile);
      const parsedArray = textSplitted
        ?.slice(2, textSplitted.length)
        .reduce<Cell[]>((acc, curr) => {
          const replace = [...curr].map((splitted) =>
            splitted === '*' ? 1 : 0,
          );
          return [...acc, ...replace];
        }, []);
      await setInputArray(parsedArray);
    };
    if (e?.target?.files) reader.readAsText(e?.target?.files[0]);
  };

  React.useEffect(() => {
    if (inputArray) setArray(inputArray);
    if (cols) setGameColumns(cols);
  }, [cols, inputArray]);

  return (
    <>
      <label className={className} htmlFor="file-upload">
        Upload a file text
      </label>
      <input
        style={{ display: 'none' }}
        id="file-upload"
        type="file"
        accept="text/plain"
        onChange={(e) => showFile(e)}
      />
    </>
  );
};

const Parser = styled(FileParserArray)`
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
  &:hover {
    cursor: pointer;
  }
`;

export { Parser };

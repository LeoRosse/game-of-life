import * as React from 'react';
import { Cell } from 'src/app/models';

export interface FileParserArrayProps {
  setArray: React.Dispatch<React.SetStateAction<Cell[]>>;
  setGameColumns: React.Dispatch<React.SetStateAction<number>>;
}

// const backgroundColor = #4C2A85

const FileParserArray: React.FC<FileParserArrayProps> = ({
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
      const parsedArray = textSplitted
        ?.slice(2, textSplitted.length)
        .reduce<Cell[]>((acc, curr) => {
          const replace = [...curr].map((splitted) =>
            splitted === '*' ? 1 : 0,
          );
          return [...acc, ...replace];
        }, []);
      setInputArray(parsedArray);
      setCols(columnsFromInputFile);
    };
    if (e?.target?.files) reader.readAsText(e?.target?.files[0]);
  };

  React.useEffect(() => {
    if (inputArray) setArray(inputArray);
    if (cols) setGameColumns(cols);
  }, [cols, inputArray]);

  return (
    <input
      id="file-upload"
      type="file"
      accept="text/plain"
      onChange={(e) => showFile(e)}
    />
  );
};

export { FileParserArray };

import * as React from 'react';
import { Cell, Matrix } from 'src/app/models';

export interface FileParserProps {
  setMatrix: React.Dispatch<React.SetStateAction<Matrix>>;
}

const FileParser: React.FC<FileParserProps> = ({ setMatrix }) => {
  const [inputMatrix, setInputMatrix] = React.useState<Cell[][]>();

  const showFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = async () => {
      const textSplitted = reader.result?.toString().split('\n');
      const parsedMatrix = textSplitted
        ?.slice(2, textSplitted.length)
        .map((el) =>
          el.split('').map((splitted) => (splitted === '*' ? 1 : 0)),
        );
      await setInputMatrix(parsedMatrix);
    };
    if (e?.target?.files) reader.readAsText(e?.target?.files[0]);
  };

  React.useEffect(() => {
    if (inputMatrix) setMatrix(inputMatrix);
  }, [inputMatrix]);

  return (
    <input
      id="file-upload"
      type="file"
      accept="text/plain"
      onChange={(e) => showFile(e)}
    />
  );
};

export { FileParser };

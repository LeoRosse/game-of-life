import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { FileParserArray, FileParserArrayProps } from './file-parser-array';

export default {
  title: 'App/Components/File-Parser-Array',
  component: FileParserArray,
} as Meta;

const Template: Story<FileParserArrayProps> = (args) => (
  <FileParserArray {...args} />
);

export const FileParserArrayBase = Template.bind({});

FileParserArrayBase.args = {
  setMatrix: window.console.log,
};

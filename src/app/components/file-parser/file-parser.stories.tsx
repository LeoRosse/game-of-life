import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { FileParser, FileParserProps } from './file-parser';

export default {
  title: 'App/Components/File-Parser',
  component: FileParser,
} as Meta;

const Template: Story<FileParserProps> = (args) => <FileParser {...args} />;

export const FileParserBase = Template.bind({});

FileParserBase.args = {
  setMatrix: window.console.log,
};

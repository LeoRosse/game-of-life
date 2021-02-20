import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { Parser, FileParserArrayProps } from './parser';

export default {
  title: 'App/Components/Parser',
  component: Parser,
} as Meta;

const Template: Story<FileParserArrayProps> = (args) => <Parser {...args} />;

export const FileParserArrayBase = Template.bind({});

FileParserArrayBase.args = {
  setMatrix: window.console.log,
};

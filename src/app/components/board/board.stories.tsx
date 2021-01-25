import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { Board, BoardProps } from './board';
import { generateMatrix } from '../../helpers';
import { drawMatrix } from '../../game';

export default {
  title: 'App/Components/Board',
  component: Board,
} as Meta;

const Template: Story<BoardProps> = (args) => {
  const matrix = generateMatrix();
  return <Board {...args}>{drawMatrix(matrix)}</Board>;
};

export const BoardBase = Template.bind({});

BoardBase.args = {
  nRows: 7,
  nColumns: 45,
};

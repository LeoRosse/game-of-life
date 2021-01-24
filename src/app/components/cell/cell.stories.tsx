import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { Cell, CellProps } from './cell';

export default {
  title: 'App/Components/Cell',
  component: Cell,
} as Meta;

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export const CellBase = Template.bind({});

CellBase.args = {
  alive: true,
};

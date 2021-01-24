import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { Game } from './game';

export default {
  title: 'App/Game',
  component: Game,
} as Meta;

const Template: Story<Record<string, unknown>> = () => <Game />;

export const GameBase = Template.bind({});

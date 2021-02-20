import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { Form, FormProps } from './form';

export default {
  title: 'App/Components/Form',
  component: Form,
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const FormBase = Template.bind({});

FormBase.args = {};

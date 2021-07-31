import React from 'react';
import { Form } from '.';
import { Blanket } from '../blanket';

export default {
  title: 'Components/Forms',
  component: Form,
  decorators: [
    (Story) => (
      <Blanket>
        <Story />
      </Blanket>
    ),
  ],
};

const Template = (args) => <Form {...args} />;

const EmptyForm = Template.bind({});
EmptyForm.args = {};

export { EmptyForm };

import React from 'react';
import { Button } from '.';

export default {
  title: 'Components/Buttons',
  component: Button,
};

const Template = (args) => <Button {...args} />;

const ModalButton = Template.bind({});
ModalButton.args = {
  label: 'Skip',
  type: 'modal',
};

const GoButton = Template.bind({});
GoButton.args = {
  label: 'Go!',
  type: 'go',
};

export { ModalButton, GoButton };

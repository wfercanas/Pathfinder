import React from 'react';
import { Modal } from '.';
import { Blanket } from '../blanket';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const HomeModal = (args) => <Modal {...args} />;
HomeModal.args = {
  labels: [
    'Welcome to Pathfinder',
    "You give me two places and I'll show you the path.",
  ],
};

const HomeModalBackground = (args) => (
  <Blanket>
    <Modal {...args} />
  </Blanket>
);
HomeModalBackground.args = { ...HomeModal.args };

export { HomeModal, HomeModalBackground };

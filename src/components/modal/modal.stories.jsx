import React from 'react';
import { Modal } from '.';

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

export { HomeModal };

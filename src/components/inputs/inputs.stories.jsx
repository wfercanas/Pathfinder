import React from 'react';
import { PlaceInput } from '.';
import { Blanket } from '../blanket/';

export default {
  title: 'Components/Inputs',
  components: PlaceInput,
  decorators: [
    (Story) => (
      <Blanket>
        <Story />
      </Blanket>
    ),
  ],
};

const Template = (args) => <PlaceInput {...args} />;

const Place = Template.bind({});
Place.args = {
  label: 'Origin',
  placeholder: 'Select origin',
};

export { Place };

import React from 'react';
import { Autocomplete } from '.';
import { Blanket } from '../blanket';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  decorators: [
    (Story) => (
      <Blanket>
        <Story />
      </Blanket>
    ),
  ],
};

const Search = (args) => <Autocomplete {...args} />;
Search.args = {
  options: [
    { description: 'CC Titán Plaza' },
    { description: 'CC Plaza Claro' },
    { description: 'CC Hayuelos' },
  ],
};

export { Search };

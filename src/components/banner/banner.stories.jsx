import React from 'react';
import { Banner } from '.';

export default {
  title: 'Components/Banner',
  component: Banner,
};

const RouteError = (args) => <Banner {...args} />;
RouteError.args = {
  message: 'Route Not Found -- Try another one',
};

export { RouteError };

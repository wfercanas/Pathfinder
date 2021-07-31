import React from 'react';
import { Info } from '.';

export default {
  title: 'Components/Info',
  component: Info,
};

const RouteInfo = (args) => <Info {...args} />;
RouteInfo.args = {
  origin: 'CC Panama',
  destination: 'CC Fontanar',
  distance: '15.8 km',
  travelTime: '32 min',
};

export { RouteInfo };

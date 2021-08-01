import React from 'react';
import { MainContainer } from './containers/main';
import { MapContextProvider } from './context/MapContext';

function App() {
  return (
    <MapContextProvider>
      <MainContainer />
    </MapContextProvider>
  );
}

export default App;

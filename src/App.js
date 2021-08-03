import React from 'react';
import { MainContainer } from './containers/mainContainer';
import { MapContextProvider } from './context/MapContext';

function App() {
  return (
    <MapContextProvider>
      <MainContainer />
    </MapContextProvider>
  );
}

export default App;

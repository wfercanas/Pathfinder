import React from 'react';
import { MainContainer } from './containers/mainContainer';
import { MapContextProvider } from './context/MapContext';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <MapContextProvider>
      <GlobalStyles />
      <MainContainer />
    </MapContextProvider>
  );
}

export default App;

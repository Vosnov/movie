import { Box } from 'components/Box';
import React from 'react';
import { movieApi } from 'services';
import './App.css';

function App() {
  const {data} = movieApi.useGetTop250Query()

  return (
    <div className="App">
      <Box>Hell</Box>
    </div>
  );
}

export default App;

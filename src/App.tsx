import { BoxMovieList, ShortMovie } from 'components';
import { Box } from 'components/Box';
import React from 'react';
import { movieApi } from 'services';
import './App.css';

function App() {
  const {data} = movieApi.useGetTop250Query()

  return (
    <div className="App">
      <BoxMovieList title='Top 250 Movie' data={data?.items.slice(0, 10) || []}/>
    </div>
  );
}

export default App;

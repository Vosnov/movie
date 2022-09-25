import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Dashboard } from 'pages';

enum RoutePath {
  dashboard = '/'
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.dashboard} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

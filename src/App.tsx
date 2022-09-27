import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Dashboard, Detail, Error } from 'pages';

export enum RoutePath {
  dashboard = '/',
  detail = '/detail',
  error = '/error',
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.dashboard} element={<Dashboard/>}/>
        <Route path={RoutePath.detail} element={<Detail/>}/>
        <Route path={RoutePath.error} element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Dashboard, Detail } from 'pages';

export enum RoutePath {
  dashboard = '/',
  detail = '/detail'
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.dashboard} element={<Dashboard/>}/>
        <Route path={RoutePath.detail} element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

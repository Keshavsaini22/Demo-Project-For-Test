import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Route from './router';

function App() {
  const content = useRoutes(Route());

  return (
    <>
      {content}
    </>
  );
}

export default App;

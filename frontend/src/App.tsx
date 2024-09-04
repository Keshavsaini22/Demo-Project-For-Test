import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { useRoutes } from 'react-router-dom';
import route from './router';

function App() {
  const content = useRoutes(route(false, ""));

  return (
    <>
      <SnackbarProvider>
        <CssBaseline>
          {content}
        </CssBaseline>
      </SnackbarProvider>

    </>
  );
}

export default App;

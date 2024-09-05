import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Route from './router';
import { useAppSelector } from './hooks';
import { RootState } from './store/store';
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@mui/material';

function App() {
  const user = useAppSelector((state: RootState) => state.persistedReducer)
  const content = useRoutes(Route(user.isLogedin, user.user?.User_role?.role_type || ""));

  return (
    <SnackbarProvider>
      <CssBaseline>
        {content}
      </CssBaseline>
    </SnackbarProvider>
  );
}

export default App;

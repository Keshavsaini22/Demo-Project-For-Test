import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import Pusher from 'pusher-js';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { useAppSelector } from './hooks';
import Route from './router';
import { RootState } from './store/store';

function App() {
  const user = useAppSelector((state: RootState) => state.persistedReducer)
  const content = useRoutes(Route(user.isLogedin, user.user?.User_role?.role_type || ""));

  useEffect(()=>{
    const pusherKey = process.env.REACT_APP_PUSHER_ENV;
    if (!pusherKey) {
      console.error("Pusher key is not defined");
      return;
    }
    var pusher = new Pusher(pusherKey, {
      cluster: 'ap2'
    });

    const channeldemo = pusher.subscribe(`demochannel`);
    channeldemo.bind('demoevent', function (data: any) {
      console.log(data)
    })

  },[])

  return (
    <SnackbarProvider>
      <CssBaseline>
        {content}
      </CssBaseline>
    </SnackbarProvider>
  );
}

export default App;

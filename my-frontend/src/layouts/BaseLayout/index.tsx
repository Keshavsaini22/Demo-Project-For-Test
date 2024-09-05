import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './BaseLayout.module.css'
import { Box } from '@mui/material';
interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {

  return (
    <Box className={styles.BaseLayoutRoot} sx={{ flex: 1, height: '100%', }}    >
      {children || <Outlet />}
    </Box>
  );
};


export default BaseLayout;

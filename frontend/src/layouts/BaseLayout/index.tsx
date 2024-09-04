import React, { ReactNode } from 'react'
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './BaseLayout.module.css'

interface BaseLayoutProps {
    children?: ReactNode;
}
function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <Box className={styles.BaseLayoutRoot} sx={{ flex: 1, height: '100%', }}>
            {children || <Outlet />}
        </Box>
    )
}

export default BaseLayout
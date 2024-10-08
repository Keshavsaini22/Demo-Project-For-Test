import React, { ReactNode, useEffect, useState } from 'react'
import styles from './SidebarLayout.module.css'
import { Box, Menu, MenuItem, useMediaQuery } from '@mui/material'
import { Outlet, useNavigate } from 'react-router';
import SidePanelNavbar from './Navbar';
import SidePanel from './SidePanel/SidePanel';
import { useAppDispatch } from '../../hooks';
import { logout } from '../../feature/auth/auth.slice';

interface LayoutProps {
    children?: ReactNode;
}

function SidebarLayout({ children }: LayoutProps) {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [menuAnchorRef, setMenuAnchorRef] = useState<HTMLElement | null>(null)
    const [openDrawer, setOpenDrawer] = useState<boolean>(true)
    const isTablet = useMediaQuery('(max-width: 1024px)')
    const open = Boolean(menuAnchorRef);

    const handleClickAvatar = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAnchorRef(event.currentTarget);
    };

    const handleCloseAvatar = () => {
        setMenuAnchorRef(null);
    };

    const handleLogout = () => {
        handleCloseAvatar();
        dispatch(logout())
    }

    useEffect(() => {
        if (isTablet) {
            setOpenDrawer(false)
        } else {
            setOpenDrawer(true)
        }
    }, [isTablet])

    return (
        <Box className={styles.root} sx={{}}>
            <SidePanelNavbar handleClickAvatar={handleClickAvatar} setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
            <Menu
                id="basic-menu"
                anchorEl={menuAnchorRef}
                open={open}
                onClose={handleCloseAvatar}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => navigate('/setting')}>Profile</MenuItem>
                <MenuItem onClick={handleLogout} >Logout</MenuItem>
            </Menu>
            <Box className={styles.content}>
                <Box className={`${openDrawer ? styles.open : styles.closed} ${styles.sidebar}`}>
                    <SidePanel handleLogout={handleLogout} />
                </Box>
                {children || <Outlet />}
            </Box>
        </Box>
    )
}

export default SidebarLayout
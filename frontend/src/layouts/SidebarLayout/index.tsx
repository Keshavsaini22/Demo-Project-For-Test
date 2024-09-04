import React, { ReactNode, useEffect, useState } from 'react'
import { Box, Menu, MenuItem, useMediaQuery } from '@mui/material'
import { Outlet, useNavigate } from 'react-router';
import SidePanel from './SidePanel/SidePanel';
import SidePanelNavbar from './Navbar';
import styles from './SidebarLayout.module.css'
import { useAppDispatch } from '../../hooks';
// import { logout } from '../../features/user/user.slice';
// import { clearAdminState } from '../../features/admin/admin.slice';
// import { clearAttendanceState } from '../../features/attendence/attendence.slice';
// import { clearBalanceState } from '../../features/balance/balance.slice';
// import { clearEmployeeState } from '../../features/employee/employee.slice';
// import { clearLeaveRequestState } from '../../features/leaveRequest/leaveRequest.slice';
// import { clearLeaveTypeState } from '../../features/leaveType/leaveType.slice';
// import { clearNotificationState } from '../../features/notification/notification.slice';
// import { clearPolicyState } from '../../features/policy/policy.slice';
// import { clearRoleState } from '../../features/roles/roles.slice';
interface LayoutProps {
  children?: ReactNode;
}

const SidebarLayout = ({ children }: LayoutProps) => {
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
    // dispatch(clearAdminState())
    // dispatch(clearAttendanceState())
    // dispatch(clearBalanceState())
    // dispatch(clearEmployeeState())
    // dispatch(clearLeaveTypeState())
    // dispatch(clearLeaveRequestState())
    // dispatch(clearNotificationState())
    // dispatch(clearPolicyState())
    // dispatch(clearRoleState())
    // dispatch(logout())
  }

  useEffect(()=>{
    if(isTablet){
      setOpenDrawer(false)
    }else{
      setOpenDrawer(true)
    }
  },[isTablet])
  
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
        {/* <MenuItem onClick={() => navigate('/setting')}>Profile</MenuItem> */}
        <MenuItem onClick={handleLogout} >Logout</MenuItem>
      </Menu>
      <Box className={styles.content}>
        <Box className={`${openDrawer ? styles.open : styles.closed} ${styles.sidebar}`}>
          <SidePanel handleLogout={handleLogout}  />
        </Box>
        {children || <Outlet />}
      </Box>
    </Box>
  )
}

export default SidebarLayout
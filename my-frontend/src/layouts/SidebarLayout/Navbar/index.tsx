import React from 'react'
import styles from './SidePanelNavbar.module.css';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import calenderSvg from '../../../assets/Images/Calendar.png';
import logo from '../../../assets/Images/logo.png';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { RootState } from '../../../store/store';

interface propsType {
    handleClickAvatar: any;
    setOpenDrawer: (data: boolean) => void;
    openDrawer: boolean;
}

function SidePanelNavbar({ handleClickAvatar, setOpenDrawer, openDrawer }: propsType) {
    const user = useAppSelector((state: RootState) => state.persistedReducer.user)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const bell = true
    const getWeekDay = () => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const curr_date = new Date(Date.now())
        var date: string | number = curr_date.getDate()
        date = date === 1 ? "1st" : date === 2 ? "2nd" : date === 3 ? "3rd" : `${date}th`

        return `${weekday[curr_date.getDay()]}, ${date} ${months[curr_date.getMonth()]} `
    }


    return (
        <Box className={styles.root}>
            <Box className={styles.left}>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ p: 1.5, mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <img height={40} width={40} src={logo} alt="logo" className={styles.logo} /> &nbsp;
                LMS
            </Box>
            <Box className={styles.right}>
                <Box className={styles.dateBox}>
                    <img src={calenderSvg} alt='calender' /> &nbsp;
                    <Typography className={styles.dateText}>{getWeekDay()}</Typography>
                </Box>
                <Box sx={{ cursor: 'pointer', color: bell ? "red" : "black" }} className={styles.notificationBox}
                    onClick={() => { navigate('/notification'); }} >
                    {
                        bell ? <NotificationsActiveIcon sx={{ width: "30px", height: "30px" }} /> : <NotificationsIcon sx={{ width: "30px", height: "30px" }} />
                    }
                </Box>
                <Box className={styles.profileBox}>
                    <Box className={styles.profileTextBox}>
                        <Typography className={styles.userName}>{`user?.name`}</Typography>
                        <Typography className={styles.userTitle}>{`user?.User_role?.role_type`}</Typography>
                    </Box>
                    <Avatar className={styles.userAvatar} src={''} onClick={(event: any) => { handleClickAvatar(event) }} />
                </Box>
            </Box>
        </Box>
    )
}

export default SidePanelNavbar
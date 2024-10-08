import { Box, Button, Typography, Divider } from '@mui/material'
import React, { useState } from 'react'
import styles from './UserSettings.module.css'
import SideNavBtn from './SideNavBtn'
import PIpng from '../../assets/Images/settingpi.png'
import Spng from '../../assets/Images/settingS.png'
// import Bntpng from '../../assets/Images/settingB&t.png'
// import Ppng from '../../assets/Images/settingP.png'
// import Lpng from '../../assets/Images/settingL.png'
import { useNavigate } from 'react-router-dom'
import PersonalInfo from './PersonalInfo'
import { useAppDispatch } from '../../hooks'
// import { updateUserAction } from '../../features/user/user.action'
import { useNotification } from '../../hooks/useNotification'
import { updateUserAction } from '../../feature/auth/auth.action'

const UserSettings = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [tab, setTab] = useState<number>(1)
    const [reqData, setReqData] = useState<any>()
    const showNotification = useNotification()

    const handleSave = async () => {
        if (tab === 1) {
            const data = {
                date_of_birth: reqData.date_of_birth,
                address: reqData.address,
                city: reqData.city,
                country: reqData.country,
                state: reqData.state,
                street: reqData.street,
                phone: reqData.phone,
                pincode: reqData.pincode
            }
            const resp: any = await dispatch(updateUserAction({ data: data }))
            if (resp.meta.requestStatus === 'fulfilled') {
                showNotification(" Profile Updated", "success");
                navigate("/setting")
                // window.location.reload();
            }
            if (resp.meta.requestStatus === 'rejected') {
                showNotification(resp?.payload?.response?.data || "Error", "error");
            }
        }
    }
    return (
        <Box className={styles.root}>
            <Box className={styles.heading}>
                <Box className={styles.headings}>
                    <Typography className={styles.heading1}>Settings</Typography>
                    <Typography className={styles.heading2}>Manage your account settings</Typography>
                </Box>
                <Box className={styles.headingBtns} >
                    <Button onClick={() => { handleSave() }} className={`${styles.saveBtn} ${styles.headingBtn}`}>Save Changes</Button>
                    <Button onClick={() => { navigate('/') }} className={`${styles.cancleBtn} ${styles.headingBtn}`} >Cancel</Button>
                </Box>
            </Box>
            <Box className={styles.main}>
                <Box className={styles.mainWrapper}>
                    <Box className={styles.children}>
                        {tab === 1 && <PersonalInfo setReqData={setReqData} />}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default UserSettings
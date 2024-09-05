import React from 'react'
import { CircularProgress, Typography, Box, Button } from '@mui/material'
import styles from './Home.module.css'

function Home() {
    return (
        <Box className={styles.root}>
            <Box className={styles.heading}>
                <Box className={styles.headings}>
                    <Typography className={styles.heading1}>Home</Typography>
                    <Typography className={styles.heading2}>Welcome to home page</Typography>
                </Box>
                <Box className={styles.headingBtns}>
                    <Button onClick={() => {
                        alert('New Leave Request')
                    }} className={`${styles.saveBtn} ${styles.headingBtn}`}>
                        New Leave Request
                    </Button>

                </Box>
            </Box>
            <Box className={styles.main}>
                <Box className={styles.mainWrapper}>

                </Box>
            </Box>
        </Box>
    )
}

export default Home
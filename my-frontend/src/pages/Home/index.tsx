import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import UsersTable from "../../components/Table/userstable";
import { getAllUsers } from "../../feature/user/user.action";
import { useAppDispatch, useAppSelector } from "../../hooks";
import styles from "./Home.module.css";

function Home() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { loading } = useAppSelector((state) => state.users);

  const handleChangePage = (event: any, newPage: number) => {
    console.log("handleChangePage")
    dispatch(getAllUsers({ pagination: { page: newPage, limit: limit } }));
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    console.log("handleChangeRowsPerPage")
    const limit = parseInt(event.target.value, 10);
    dispatch(getAllUsers({ pagination: { page: page, limit: limit } }));
    setLimit(limit);
    setPage(0);
  };

  useEffect(() => {
    dispatch(getAllUsers({ pagination: { page: 0, limit: 10 } }));
  }, []);

  return (
    <Box className={styles.root}>
      <Box className={styles.heading}>
        <Box className={styles.headings}>
          <Typography className={styles.heading1}>Home</Typography>
          <Typography className={styles.heading2}>
            Welcome to home page
          </Typography>
        </Box>
        <Box className={styles.headingBtns}>
          <Button
            onClick={() => {
              alert("New Leave Request");
            }}
            className={`${styles.saveBtn} ${styles.headingBtn}`}
          >
            New Leave Request
          </Button>
        </Box>
      </Box>
      <Box className={styles.main}>
        <Box className={styles.mainWrapper}>
          {loading ? (
            <CircularProgress sx={{ margin: "auto" }} />
          ) : (
            <UsersTable
              limit={limit}
              page={page}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              handleChangePage={handleChangePage}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

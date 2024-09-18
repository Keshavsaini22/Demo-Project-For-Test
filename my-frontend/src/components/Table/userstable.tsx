import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks';
import NoDatafound from '../NoData';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

function UsersTable({ limit, page, handleChangePage, handleChangeRowsPerPage }: any) {
  const { users, count } = useAppSelector((state) => state.users);

  return (
    <div style={{ maxHeight: '100%', overflow: 'auto', width: '100%' }}>
      <TableContainer component={Paper} sx={{ maxHeight: '20%', overflowX: 'auto' }}>
        <Table size="small" sx={{ border: '1px solid #E0E0E0', overflow: 'hidden', overflowX: 'auto' }} aria-label="collapsible table">
          <TableHead>
            <TableRow sx={{ height: '50px', border: '2px solid #E0E0E0', backgroundColor: "#e8f1fa" }}>
              <TableCell sx={{ width: '10px' }}></TableCell>
              <TableCell sx={{ maxWidth: '50px', minWidth: '30px', fontSize: '16px', fontWeight: '500' }}>S No.</TableCell>
              <TableCell sx={{ maxWidth: '220px', minWidth: '100px', fontSize: '16px', fontWeight: '500' }}>First Name</TableCell>
              <TableCell sx={{ maxWidth: '220px', minWidth: '100px', fontSize: '16px', fontWeight: '500' }}>Last Name</TableCell>
              <TableCell sx={{ maxWidth: '220px', minWidth: '100px', fontSize: '16px', fontWeight: '500' }}>Email</TableCell>
              <TableCell sx={{ maxWidth: '220px', minWidth: '100px', fontSize: '16px', fontWeight: '500' }}>Username</TableCell>
              <TableCell colSpan={3} sx={{ maxWidth: '220px', minWidth: '100px', fontSize: '16px', fontWeight: '500' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {users.length === 0 && <TableRow>
              <TableCell colSpan={9}><Typography variant="h5" style={{ textAlign: 'center', marginTop: '50px', width: "100%" }}>
                <NoDatafound heading="" subHeading='No Users Found' /></Typography></TableCell></TableRow>}
            {Array.isArray(users) && users?.map((row, index) => (
              <TableRow sx={{ height: '40px' }} key={row.uuid}>
                <TableCell sx={{ width: '1px' }}></TableCell>
                <TableCell sx={{ maxWidth: '50px', minWidth: '30px' }}>{((limit * page) + index + 1)}</TableCell>
                <TableCell sx={{ maxWidth: '220px', minWidth: '100px', textOverflow: 'ellipsis' }}>{row?.first_name}</TableCell>
                <TableCell sx={{ maxWidth: '220px', minWidth: '100px', textOverflow: 'ellipsis' }}>{row?.last_name}</TableCell>
                <TableCell sx={{ maxWidth: '220px', minWidth: '100px', textOverflow: 'ellipsis' }}>{row?.email}</TableCell>
                <TableCell sx={{ maxWidth: '220px', minWidth: '100px', textOverflow: 'ellipsis' }}>{row?.username}</TableCell>
                <TableCell sx={{ maxWidth: '220px', minWidth: '100px' }}>
                  <Box sx={{ display: 'flex', gap: '2px' }}>
                    <IconButton size="small" sx={{ color: '#424242' }} onClick={() => { }}>
                      <VisibilityOutlinedIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ color: '#424242' }} onClick={() => { }}>
                      <ModeEditOutlinedIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ color: '#424242', }} onClick={() => { }}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            {count >= 5 && count &&
              <TableRow>
                <TableCell sx={{ padding: "0px" }} colSpan={9}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: "100%" }}>
                    <TablePagination
                      rowsPerPageOptions={[5, 10,20]}
                      component="div"
                      count={count}
                      rowsPerPage={limit}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      nextIconButtonProps={{
                        title: "Go to next page",
                      }}
                      backIconButtonProps={{
                        title: "Go to previous page",
                      }}
                      labelRowsPerPage={<span style={{ fontSize: "12px" }}>Rows per page:</span>}
                      labelDisplayedRows={({ from, to, count }) => (
                        <span style={{ fontSize: "12px" }}>{`${from}-${to} of ${count}`}</span>
                      )}
                      SelectProps={{
                        style: { fontSize: "12px" },
                      }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default UsersTable
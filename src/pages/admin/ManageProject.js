import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminDrawer from '../../components/admin/AdminDrawer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Modal from '@mui/material/Modal';
import DetailsIcon from '@mui/icons-material/Details';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function ManageProject() {
  const navigate = useNavigate() 
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [fetched,setFetched] = useState();
  const [dataProjct, setDataProject] = useState();

  // edit modal state
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);
  
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/project/`,
    };
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.project));
      setDataProject(response.data.project)
    })
    .catch((error) => {
      console.log(error);
    });
    
  }, [fetched])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  if (localStorage.getItem('userId') == undefined){
    navigate("/login");
  }else {
    return (
      <Box sx={{ display: 'flex', width: '100vw'}}>
        <CssBaseline />
        {/* header */}
        <div>
          <AdminHeader handleDrawerOpen={handleDrawerOpen} open={open} title="Manage Project"></AdminHeader>
          <AdminDrawer Drawer={Drawer} open={open} handleDrawerClose={handleDrawerClose}></AdminDrawer>
        </div>
        {/* content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%'}}>
          <DrawerHeader />
          {/* card project status overview */}
          { dataProjct ? 
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Project ID</StyledTableCell>
                    <StyledTableCell align="right">Title</StyledTableCell>
                    <StyledTableCell align="right">Status</StyledTableCell>
                    <StyledTableCell align="right">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataProjct.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row">
                        {row._id}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.title}</StyledTableCell>
                      <StyledTableCell align="right">{row.status}</StyledTableCell>
                      <StyledTableCell align="right">
                        <Link to={`/admin/ManageProject/${row._id}`}>
                          <Button variant="contained" endIcon={<DetailsIcon />}
                            color='primary'
                            sx={{marginX: 2}}
                          >
                            Detail
                          </Button>
                        </Link>
                        {/* <Button variant="outlined" startIcon={<DeleteIcon />}
                          color='error'
                        >
                          Delete
                        </Button> */}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          :
            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          }
        </Box>
      </Box>
    );
  }
}

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
import AdminModal from '../../components/admin/AdminModal';
import { useForm, Controller } from "react-hook-form";
import AddPacketModal from '../../components/admin/managePacket/AddPacketModal';
import ConfirmDeleteModal from '../../components/admin/managePacket/ConfirmDeleteModal';
import UpdatePacketModal from '../../components/admin/managePacket/UpdatePacketModal';
import { useNavigate } from 'react-router-dom';
import AlertNotification from '../../components/AlertNotification';
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

export default function ManagePacket() {
  const navigate = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [fetched,setFetched] = useState();
  const [dataPacket, setDataPacket] = useState();
  const [deletePacket, setDeletePacket] = useState({
    name: "",
    id: ""
  });
  const [updatePacket, setUpdatePacket] = useState({
    name: "",
    id: "",
    description: "",
    price: ""
  });
  const [openAlert, setOpenalert] = useState({
    open: false,
    message: "",
    mode: ""
  });
  const [openModalAdd, setOpenModalAdd] = React.useState(false);
  const handleOpenModalAdd = () => setOpenModalAdd(true);
  const handleCloseModalAdd = () => setOpenModalAdd(false);
  
  // delete modal var
  const [openModalDelete, setOpenModalDelete] = React.useState(false);
  const handleOpenModalDelete = ((packetId, packetName) => {
    setOpenModalDelete(true)
    setDeletePacket({
      name: packetName,
      id: packetId
    })
  })

  // update packet
  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);
  const handleCloseModalUpdate = () => setOpenModalUpdate(false);

  const handleOpenModalUpdate = ((packetId, packetName,packetDescription, packetPrice) => {
    console.log(packetId)
    setOpenModalUpdate(true)
    setUpdatePacket({
      name: packetName,
      id: packetId,
      description: packetDescription, 
      price: packetPrice
    })
  })
  
  const handleCloseModalDelete = () => setOpenModalDelete(false);
	const {
    handleSubmitAdd,
    formState: { errors },
    registerAdd,
  } = useForm({ 
    mode: "all",
  });
  
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/packet`,
    };
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.project));
      setDataPacket(response.data.packet)
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
      <Box sx={{ display: 'flex' }}>
        <AlertNotification open={openAlert.open} setOpen={setOpenalert} mode={openAlert.mode}>
            <p>{openAlert.message}</p>
        </AlertNotification>
        <CssBaseline />
        {/* header */}
        <AdminHeader handleDrawerOpen={handleDrawerOpen} open={open}  title="Manage Packet"></AdminHeader>
        <AdminDrawer Drawer={Drawer} open={open} handleDrawerClose={handleDrawerClose}></AdminDrawer>
        {/* content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%'}}>
          <DrawerHeader />
          <Box sx={{ marginY: '10px'}}>
            <Button variant="outlined" onClick={handleOpenModalAdd}>Add Packet</Button>
          </Box>
          {/* card project status overview */}
          { dataPacket ? 
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Packet type</StyledTableCell>
                    <StyledTableCell align="right">name</StyledTableCell>
                    <StyledTableCell align="right">description</StyledTableCell>
                    <StyledTableCell align="right">price</StyledTableCell>
                    <StyledTableCell align="right">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataPacket.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row">
                        {row.type}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.name}</StyledTableCell>
                      <StyledTableCell align="right">{row.price}</StyledTableCell>
                      <StyledTableCell align="right">{row.description}</StyledTableCell>
                      <StyledTableCell align="right">
                        <Button variant="contained" endIcon={<EditIcon />}
                          color='secondary'
                          sx={{marginX: 2}}
                          onClick={() => handleOpenModalUpdate(row._id, row.name,row.description, row.price)}
                        >
                          Edit
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />}
                          color='error'
                          onClick={()=> handleOpenModalDelete(row._id, row.name)}
                        >
                          Delete
                        </Button>
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
        {/* modal add packet */}
        <AddPacketModal openModalAdd={openModalAdd} handleCloseModal={handleCloseModalAdd} notifyChangeVar={setFetched} setNotification={setOpenalert}></AddPacketModal>
        {/* modal delete packet */}
        <ConfirmDeleteModal openModalAdd={openModalDelete} handleCloseModal={handleCloseModalDelete} notifyChangeVar={setFetched} data={deletePacket} setNotification={setOpenalert}></ConfirmDeleteModal>
        {/* modal update packet */}
        <UpdatePacketModal openModalAdd={openModalUpdate} handleCloseModal={handleCloseModalUpdate} notifyChangeVar={setFetched} data={updatePacket} setNotification={setOpenalert}></UpdatePacketModal>
      </Box>
    );
  }
}

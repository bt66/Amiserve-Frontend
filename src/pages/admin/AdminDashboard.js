import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminDrawer from '../../components/admin/AdminDrawer';
import Container from '@mui/material/Container';
import CardProjectStatus from '../../components/admin/CardProjectStatus';
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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

export default function AdminDashboard() {
  const navigate = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [fetched,setFetched] = useState();
  const [projectCount, setProjectCount] = useState({
    "project_dihentikan" : 0,
    "project_expired" : 0,
    "project_dibuat" : 0,
    "pembayaran_diverifikasi" : 0
  });

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/project/`,
    };
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.project));
      response.data.project.map((data) => {
        console.log(data)
      })
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

  useEffect(() => {
    document.body.style.backgroundColor ="#121212"
  })
  if (localStorage.getItem('userId') == undefined){
    navigate("/login");
  }else {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* header */}
        <AdminHeader handleDrawerOpen={handleDrawerOpen} open={open} title="Admin Dashboard"></AdminHeader>
        <AdminDrawer Drawer={Drawer} open={open} handleDrawerClose={handleDrawerClose}></AdminDrawer>
        {/* content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {/* card project status overview */}
          <Container 
            >
            {/* <p>Project Overview :</p> */}
            <Container 
              sx={{
                display: "flex",
                flexWrap: "wrap"
                
              }}
            >
              <CardProjectStatus title="Project dibuat" count={`${projectCount.project_dibuat}`} color="secondary.dark"></CardProjectStatus>
              <CardProjectStatus title="Project Dihentikan" count={`${projectCount.project_dibuat}`} color="error.dark"></CardProjectStatus>
              <CardProjectStatus title="Project expired" count={`${projectCount.project_dibuat}`} color="warning.dark"></CardProjectStatus>
              <CardProjectStatus title="Pembayaran diverifikasi" count={`${projectCount.project_dibuat}`} color="success.dark"></CardProjectStatus>
            </Container>
            {/* box status unpaid */}
          </Container>
          {/* menu */}
          <Container>
            <Container
              sx={{
                marginTop: '20px'
              }}
            >
              <Link to={'/admin/ManageUser'}>
                <Box
                  sx={{
                      boxShadow: 1,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 210,
                      maxWidth: 210,
                      margin: "4px",
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px dashed grey'
                  }}
                >
                  <PersonIcon></PersonIcon>
                  <Box sx={{ color: 'text.primary', fontSize: 25, fontWeight: 'medium', marginX: '10px'}}>
                      User
                  </Box>
                </Box>
              </Link>

              <Box sx={{ display: 'flex' }}>
                <Box>
                </Box>
              </Box>
              
              <Link to={'/admin/ManageProject'}>
                <Box
                  sx={{
                      boxShadow: 1,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 210,
                      maxWidth: 210,
                      margin: "4px",
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px dashed grey'
                  }}
                >
                  <DataUsageIcon></DataUsageIcon>
                  <Box sx={{ color: 'text.primary', fontSize: 25, fontWeight: 'medium', marginX: '10px'}}>
                      Project
                  </Box>
                  
                </Box>
              </Link>

              {/* Project */}
              <Box sx={{ display: 'flex' }}>
                <Box>
                </Box>
              </Box>
              {/* packet */}
              <Link to={'/admin/ManagePacket'}>
                <Box
                  sx={{
                      boxShadow: 1,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 210,
                      maxWidth: 210,
                      margin: "4px",
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px dashed grey'
                  }}
                >
                  <LocalOfferIcon></LocalOfferIcon>
                  <Box sx={{ color: 'text.primary', fontSize: 25, fontWeight: 'medium', marginX: '10px'}}>
                      Packet
                  </Box>
                </Box>
              </Link>
              
              <Box sx={{ display: 'flex' }}>
                <Box>
                </Box>
              </Box>
            </Container>
          </Container>
        </Box>
      </Box>
    );
  }
}

import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


function AdminDrawer(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleLogout = ((event) => {
    event.preventDefault();
    localStorage.clear()
    navigate('/')
  })
  return (
    <props.Drawer variant="permanent" open={props.open} sx={{position: 'relative'}}>
      <DrawerHeader>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Link to={'/admin'}>
          <ListItem key="Dashboard" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              <DashboardIcon></DashboardIcon>
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: props.open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={'/admin/ManageUser'}>
          <ListItem key="Manage User" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              <AccountBoxIcon></AccountBoxIcon>
              </ListItemIcon>
              <ListItemText primary="Manage User" sx={{ opacity: props.open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={'/admin/ManageProject'}>
          <ListItem key="Manage Project" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              <DataUsageIcon></DataUsageIcon>
              </ListItemIcon>
              <ListItemText primary="Manage Project" sx={{ opacity: props.open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={'/admin/ManagePacket'}>
          <ListItem key="Manage Packet" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              <LocalOfferIcon></LocalOfferIcon>
              </ListItemIcon>
              <ListItemText primary="Manage Packet" sx={{ opacity: props.open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>

      <List 
        sx={{
          position: 'absolute',
          bottom: '0px',
          width: "100%"
        }}
      >
          <ListItem key="Logout" disablePadding sx={{ 
            display: 'block',
            }}
            onClick={handleLogout}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              <LogoutIcon></LogoutIcon>
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: props.open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
      </List>
    </props.Drawer>
  )
}

export default AdminDrawer
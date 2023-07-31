import React, { useState, useEffect, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminDrawer from '../../components/admin/AdminDrawer';
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import AdminModal from '../../components/admin/AdminModal';
import Loading from '../../components/Loading';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { Button } from '@mui/material';
import AlertNotification from '../../components/AlertNotification';
import { useNavigate } from 'react-router-dom';

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



export default function AdminDetailProject() {
  const navigate = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState();
  const [dataStatus, setDataStatus] = useState();
  const [fetched,setFetched] = useState();
  const params = useParams();
  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);
  const handleOpenModalUpdate = () => setOpenModalUpdate(true);
  const handleCloseModalUpdate = () => setOpenModalUpdate(false);

  const [domainMode, setDomainMode] = useState("false")
  const loadingRef = useRef();
	const {
			handleSubmit,
			formState: { errors },
			register,
      reset,
	} = useForm({ 
		mode: "all",
		defaultValues: {
			status_id: "0"
		}
	});
  const [openAlert, setOpenalert] = useState({
    open: false,
    message: "",
    mode: ""
  });
  
  // update status
	const onSubmitUpdateStatus = (values) => {
			console.log(values)
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_BACKEND_URL}/project/edit/status/${params.idProject}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : values
      };
      setFetched(true)
      axios.request(config)
      .then((response) => {
        setOpenalert({
          open: true,
          message: "Update Status success",
          mode: "success"
        })
        setFetched(false)
        setOpenModalUpdate(false)
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        setOpenalert({
          open: true,
          message: "Update Status failed",
          mode: "error"
        })
        setFetched(false)
        setOpenModalUpdate(false)
        console.log(error);
      });
      
			
	};

  // get project
  useEffect(() => {
    var config = {
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/project/${params.idProject}`,
        // headers: { 
        // 'Authorization': `Bearer ${localStorage.getItem("token")}`
        // },
    };
    console.log(config)
    axios(config)
    .then(response => 
        {
            setData(response.data.project)
            setFetched(true)
            console.log(data)
            
        })
    .catch(function (error) {
        console.log(error)
    })
  },[fetched])

  // get status
  useEffect(() => {
    var config = {
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/status`,
    };
    axios(config)
    .then(response => 
        {
            setDataStatus(response.data.status)
            // setFeched(true)
            console.log("ini data")
            console.log(dataStatus)            
        })
    .catch(function (error) {
        console.log(error)
    })
  }, [fetched])

  // reset form to current value
  // useEffect(() => {
  //   if (data) {
  //     console.log(data.status_id)
  //     reset({
  //         status_id: data.status_id,
  //     })
  //   }
  // }, [data])

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
      <Box sx={{ display: 'flex', position: "relative" }}>
        <AlertNotification open={openAlert.open} setOpen={setOpenalert} mode={openAlert.mode}>
            <p>{openAlert.message}</p>
        </AlertNotification>
        <div ref={loadingRef} className="hidden">
            <Loading/>
        </div>
        <CssBaseline />
        {/* header */}
        <AdminHeader handleDrawerOpen={handleDrawerOpen} open={open} title="Detail Project"></AdminHeader>
        <AdminDrawer Drawer={Drawer} open={open} handleDrawerClose={handleDrawerClose}></AdminDrawer>
        {/* content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box sx={{ p: 2, border: '1px dashed grey', width: '100%' }}>
          {data ? 
                  <div>

                    <div>
                      
                      <p className='text-2xl p-2 md:text-2xl'><b>{data.title}</b></p>
                      <div className='px-3'>
                        <div className='mt-1 lg:mt-3'>
                          <p className='text-xl font-bold'>Project :</p>
                          <li>Source code URL : {data.source_code_url}</li>
                        </div>
                      </div>
                      <div className='p-3'>
                        <div className='mt-1 lg:mt-3'>
                          <p className='text-xl font-bold'>Domain and SSL Information :</p>
                          <li>Domain type : {data.domain.domain_type}</li>
                          <li>Domain name : {data.domain.domain_name}</li>
                          <li>SSL type : {data.ssl.ssl_type}</li>
                        </div>
                        <div className='mt-1 lg:mt-3 max-w-md'>
                          <p className='text-xl font-bold'>Current Status :</p>
                          <p>{data.status}</p>
                        </div>
                        <div className='mt-1 lg:mt-3'>
                          <p className='text-xl font-bold'>Billing :</p>
                          <li>Packet Name : {data.packet.packet_name}</li>
                          <li>Transaction Status: {data.status}</li>
                          <li>Total : Rp.{data.packet.packet_price}</li>
                          {/* <button className='bg-[#3C47A3] px-3 py-3 rounded-md m-2'>Detail Payment</button> */}
                        </div>


                      </div>
                      <div className='p-3'>
                        <p className='text-xl md:text-2xl'><b>Action :</b></p>
                        <div>
                          <button className='bg-[#3C47A3] px-3 py-3 rounded-md m-2' onClick={handleOpenModalUpdate}>Edit Status</button>
                          {/* <button className='bg-[#A33C3C] px-3 py-3 rounded-md m-2'>Suspend</button> */}
                        </div>
                      </div>
                    </div>
                    <div className='p-3 basis-1/3'>
                      <p className='text-xl md:text-2xl'><b>History :</b></p>
                      <div>
                        <ul className='list-outside list-disc px-5 mt-2'>
                          {
                            data.history.map((history) => (
                              <li key={history._id}>{history.time} - {history.description}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
            : 
            ""
          }
          </Box>
        </Box>
        <AdminModal openModalUpdate={openModalUpdate} handleCloseModalUpdate={handleCloseModalUpdate}>
          {dataStatus && data ? 
            <form onSubmit={handleSubmit(onSubmitUpdateStatus)}>
              <div className='mt-1 flex flex-col p-2'>
                  <label htmlFor='projectStatus' className='w-full lg:text-xl mt-3'><b><span className="text-red-500">*</span>Project Status :</b></label>
                  <div className='relative'>
                  <select {...register("status_id", { required: true })}
                  className='bg-[#454446] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'
                  >
                    {
                      dataStatus.map((item) => (
                        <option key={item._id} value={item.status_id}>{item.description}</option>
                      ))
                    }
                  </select>

                      <p className='text-red-400'>{errors.projectStatus && errors.projectStatus.message}</p>
                  </div>
              </div>
              <div className='flex justify-end'>
                <div>
                  <Button type='submit'>update</Button>
                </div>
              </div>
            </form>
          
          : 
          <p>data not ready yet</p>
          }
        </AdminModal>
      </Box>
    );
  }
}



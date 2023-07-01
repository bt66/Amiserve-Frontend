import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Landingpage from './pages/Landingpage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import About from './pages/About';
// userpage
import Overview from './pages/user/Overview';
import DetailProject from './pages/user/DetailProject';
import DomainAndSsl from './pages/user/DomainAndSSL';
import Billing from './pages/user/Billing';
import UserProfile from './pages/user/UserProfile';
// 
import AddProjectForm from './pages/user/AddProjectForm';
import FormProvider from './context';

// admin
import AdminDashboard from './pages/admin/AdminDashboard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ManageUser from './pages/admin/ManageUser';
import ManageProject from './pages/admin/ManageProject';
import ManagePacket from './pages/admin/ManagePacket';
import AdminDetailProject from './pages/admin/AdminDetailProject';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// form step 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage/>,
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/login",
    element: <Loginpage/>,
  },
  {
    path: "/register",
    element: <Registerpage/>,
  },
  {
    path: "/user/overview",
    element: <Overview/>,
  },
  {
    path: "/user/billing",
    element: <Billing/>,
  },
  {
    path: "/user/DetailProject/:idProject",
    element: <DetailProject/>,
  },
  {
    path: "/user/DomainAndSSL/:idProject",
    element: <DomainAndSsl/>,
  },
  // {
  //   path: "/user/AddProject",
  //   element: <AddProjectForm/>
  // },
  {
    path: "/user/Profile",
    element: <UserProfile/>
  },
  // admin route
  {
    path: "/admin",
    element: <AdminDashboard/>
  },
  {
    path: "/admin/ManageUser",
    element: <ManageUser/>
  },
  {
    path: "/admin/ManageProject",
    element: <ManageProject/>
  },
  {
    path: "/admin/ManagePacket",
    element: <ManagePacket/>
  },
  {
    path: "/admin/ManageProject/:idProject",
    element: <AdminDetailProject/>
  }
]);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
    <FormProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
      {/* <Landingpage/> */}
    </FormProvider>
  </ThemeProvider>
  // <React.StrictMode>
  // </React.StrictMode>
)

reportWebVitals();

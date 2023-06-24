import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Landingpage from './pages/Landingpage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Development from './pages/Development';
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
    path: "/development",
    element: <Development/>,
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
    path: "/user/DomainAndSSL",
    element: <DomainAndSsl/>,
  },
  // {
  //   path: "/user/AddProject",
  //   element: <AddProjectForm/>
  // },
  {
    path: "/user/Profile",
    element: <UserProfile/>
  }
  // form route
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FormProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
      {/* <Landingpage/> */}
    </FormProvider>
  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

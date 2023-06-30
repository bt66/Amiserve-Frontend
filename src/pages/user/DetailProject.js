import React, { useEffect, useState } from 'react'
import UserHeader from '../../components/UserHeader'

import DetailProjectSidebar from '../../components/DetailProjectSidebar'
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import UpdateProjectCard from '../../components/UpdateProjectForm/UpdateProjectCard';
import DetailPaymentCard from '../../components/UpdateProjectForm/DetailPaymentCard';
import ConfirmStopSubscribtion from '../../components/UpdateProjectForm/ConfirmStopSubscribtion';
import { useNavigate } from 'react-router-dom';
import AlertNotification from '../../components/AlertNotification';

import axios from 'axios';

// static data

function DetailProject() {
  const navigate = useNavigate()
  const [data, setData] = useState();
  const [fetched, setFeched] = useState(false);
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [openModalPayment, setOpenModalPayment] = useState(false);
  const [openModalStopSub, setOpenModalStopSub] = useState(false);
  const handleOpenModal = (event) => {
    // event.preventDefault();
    setOpenModal(!openModal);

  }
  const handleOpenModalPayment = (event) => {
    // event.preventDefault();
    setOpenModalPayment(!openModalPayment);

  }
  const handleOpenModalStopSubscribtion = (event) => {
    setOpenModalStopSub(!openModalStopSub)
    console.log(openModalStopSub)
  }
  const [openAlert, setOpenalert] = useState({
    open: false,
    message: "",
    mode: ""
  });
  
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
            setFeched(true)
            console.log(data)
            
        })
    .catch(function (error) {
        console.log(error)
        // if unauthorized redirect to login
        // if(error.response.status == 401){
        //     navigate("/login");
        // }
    })
  },[fetched])


  useEffect(() => {
    document.body.style.backgroundColor ="#1F004F"
  })

  const getstatusColor = (status) => {
    if (status === "paid"){
      return 'bg-green-400'
    }else if(status === 'Waiting Payment') {
      return 'bg-[#FFE600]'
    }else {
      return 'bg-[#FF0000]'
    }
  }
  if (localStorage.getItem('userId') == undefined){
    navigate("/login");
  }else {
    return (
      <div className='absolute bg-[#1F004F] w-screen h-screen overflow-auto text-white'>
        <AlertNotification open={openAlert.open} setOpen={setOpenalert} mode={openAlert.mode}>
            <p>{openAlert.message}</p>
        </AlertNotification>
        <div className={openModalStopSub ? "block" : "hidden"}>
          {data ? <ConfirmStopSubscribtion handleOpenModal={handleOpenModalStopSubscribtion} data={data}></ConfirmStopSubscribtion> : <p>data doesn't ready</p>}
          
        </div>
        <div className={openModal ? "block" : "hidden"}>
          {data ?  <UpdateProjectCard handleOpenModal={handleOpenModal} data={data} setFetchState={setFeched} setNotification={setOpenalert}></UpdateProjectCard> : <p>data doesn't ready</p>}
        
        </div>
        <div className={openModalPayment ? "block" : "hidden"}>
          {data ?  <DetailPaymentCard handleOpenModal={handleOpenModalPayment} data={data}></DetailPaymentCard> : <p>data doesn't ready</p>}
        
        </div>
        <div className='flex h-screen'>
          <DetailProjectSidebar idProject={params.idProject}/>
          <div className='w-full h-full flex flex-col p-2'>
            <UserHeader pageTitle="Project"></UserHeader>
            {data ? 
            <div className='w-full h-full  bg-[#9F49F5] p-1 rounded-xl'>

                  <div className='bg-[#3B2164] w-full h-full rounded-xl md:flex md:p-10  md:justify-between'>
                    <div>
                      
                      <p className='text-2xl p-2 md:text-2xl'><b>{data.title}</b></p>
                      <div className='p-3'>
                        <div className='mt-1 lg:mt-3'>
                          <p className='text-xl font-bold'>Domain and SSL Information :</p>
                          <li>Domain type : {data.domain.domain_type}</li>
                          <li>Domain name : {data.domain.domain_name}</li>
                          <li>SSL tyle : {data.ssl.ssl_type}</li>
                        </div>
                        <div className='mt-1 lg:mt-3 max-w-md'>
                          <p className='text-xl font-bold'>Current Status :</p>
                          <p>{data.status}</p>
                        </div>
                        <div className='mt-1 lg:mt-3'>
                          <p className='text-xl font-bold'>Billing :</p>
                          <li>Packet Name : {data.packet.packet_name}</li>
                          <li>Transaction Status: <span className={`${getstatusColor(data.transaction.transaction_status)} px-2 py-1 rounded-xl`}>{data.transaction.transaction_status}</span></li>
                          <li>Total : Rp.{data.packet.packet_price}</li>
                          <button className='bg-[#3C47A3] px-3 py-3 rounded-md m-2' onClick={handleOpenModalPayment}>Detail Payment</button>
                        </div>


                      </div>
                      <div className='p-3'>
                        <p className='text-xl md:text-2xl'><b>Action :</b></p>
                        <div>
                          <button className='bg-[#3C47A3] px-3 py-3 rounded-md m-2' onClick={handleOpenModal}>Update Source Code</button>
                          <button className='bg-[#A33C3C] px-3 py-3 rounded-md m-2' onClick={handleOpenModalStopSubscribtion}>Stop subscribtion</button>
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
              </div>
            : 
            ""}
          </div>
        </div>
      </div>
    )
  }
}

export default DetailProject
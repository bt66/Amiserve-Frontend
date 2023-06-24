import React, { useEffect, useState } from 'react'
import UserHeader from '../../components/UserHeader'
import AddIcon from '../../assets/addIcon.svg'
import SearchIcon from '../../assets/searchIcon.svg'
import ReactLogo from '../../assets/reactLogo.svg'
import LinkIcon from '../../assets/linkIcon.svg'
import DetailProjectSidebar from '../../components/DetailProjectSidebar'
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

import axios from 'axios';

// static data
const DetailProjectContent = [
  {
    title: "Fp ecommerce",
    domain: "fp-ecommerce.amiserve.cloud",
    service_type: "Frontend",
    programing_language: "Javascript",
    Status: "Deployed",
    history: [
      "02/06/2023- 10.00PM Requested deployment",
      "02/06/2023- 10.10PM Deployed",
    ]
  }
]

function DetailProject() {
  const [data, setData] = useState();
  const [fetched, setFeched] = useState(false);
  const params = useParams();

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
    if (status === "Deployed"){
      return 'bg-green-400'
    }else if(status === 'Update requested') {
      return 'bg-[#FFE600]'
    }else {
      return 'bg-[#FF0000]'
    }
  }
  return (
    <div className='absolute bg-[#1F004F] w-screen h-screen overflow-auto text-white'>
      <div className='flex h-screen'>
        <DetailProjectSidebar idProject={params.idProject}/>
        <div className='w-full h-full flex flex-col p-2'>
          <UserHeader pageTitle="Project"></UserHeader>
          <div className='w-full h-full  bg-[#9F49F5] p-1 rounded-xl'>

            {data ? 
                <div className='bg-[#3B2164] w-full h-full rounded-xl md:flex md:p-10  md:justify-between'>
                  <div>
                    
                    <p className='text-2xl p-2 md:text-2xl'><b>{data.title}</b></p>
                    <div className='p-3'>
                      <p className='md:text-xl'>Domain : {data.domain.domain_name}</p>
                      <p className='md:text-xl'>Service type : {data.packet.packet_name}</p>
                      <div className='flex items-center'>
                        <p className='md:text-xl'>Status: </p>
                        <div className={` w-2 h-2 rounded-full mx-1 md:mx-2 ${getstatusColor(data.status)}`}></div>
                        <p className='md:text-xl'>{data.status}</p>
                      </div>
                    </div>
                    <div className='p-3'>
                      <p className='text-xl md:text-2xl'><b>Action :</b></p>
                      <div>
                        <button className='bg-[#3C47A3] px-3 py-3 rounded-md m-2'>Update Source Code</button>
                        <button className='bg-[#A33C3C] px-3 py-3 rounded-md m-2'>Stop subscribtion</button>
                      </div>
                    </div>
                  </div>
                  <div className='p-3'>
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
            <p></p>}
                

          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProject
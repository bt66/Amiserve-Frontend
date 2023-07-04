import React, { useEffect, useState } from 'react'
import UserHeader from '../../components/UserHeader'
import AddIcon from '../../assets/addIcon.svg'
import SearchIcon from '../../assets/searchIcon.svg'
import ReactLogo from '../../assets/reactLogo.svg'
import LinkIcon from '../../assets/linkIcon.svg'
import UserSidebar from '../../components/UserSidebar'
import AddProjectForm from './AddProjectForm'
import Loading from '../../components/Loading'
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

function Overview() {
  const navigate = useNavigate();
  const[data, setData] = useState([]);
  const [fetched, setFeched] = useState(false);

  useEffect(() => {
    var config = {
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/project/owner/${localStorage.getItem("userId")}`,
    };
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
  const [openAddProject, SetopenAddProject] = useState(false);

  function handleAddProjectModal() {
    console.log(openAddProject)
    SetopenAddProject(!openAddProject)
  }
  if (localStorage.getItem('userId') == undefined){
    navigate("/login");
  }else {
    return (
      <div className='absolute bg-[#1F004F] w-screen h-screen overflow-auto text-white'>
        <div className={openAddProject ? "block" : "hidden"}>
          <AddProjectForm handleClose={handleAddProjectModal} fetchedState={setFeched} getFetchState={fetched}></AddProjectForm>
        </div>
        <div className='flex'>
          <UserSidebar/>
          <div className='w-full h-full'>
            <UserHeader pageTitle="Overview"></UserHeader>
            <div>
              <div className='flex justify-between p-2'>
                <p className='text-xl lg:text-3xl md:hidden'><b>Overview</b></p>
                <div className='bg-[#8000FF] rounded-md flex px-1 py-2 w-32 sm:hidden'>
                  <img src={AddIcon} className='w-8'></img>
                  <div className='flex items-center' onClick={handleAddProjectModal}>
                    <p>Add Project</p>
                  </div>
                </div>
              </div>
              <div className='p-2 sm:flex sm:justify-around lg:justify-center'>
                <form className='basis-5/6 sm:basis-10/12 lg:basis-11/12 px-1'>
                  <div className='relative'>
                    <input 
                      type='text'
                      placeholder='search'
                      className='bg-[#604A82] rounded-md h-12 w-full p-3'
                    />
                    <div className='absolute top-0 right-1 w-10 h-full flex items-center'>
                      <img src={SearchIcon}></img>
                    </div>
                  </div>
                </form>
                
                <div className='hidden bg-[#8000FF] rounded-md sm:flex px-1 py-2 w-32 h-12 overflow-hidden'>
                  <img src={AddIcon} className='w-8'></img>
                  <div className='flex items-center' onClick={handleAddProjectModal}>
                    <p>Add Project</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content */}
            <div className='flex justify-center items-start w-full'>
              
              <div className='flex flex-col flex-wrap w-full'>
                {/* card */}
                  {
                    data.map((item) => (
                      <Link to={`/user/DetailProject/${item._id}`}>
                        <div className='bg-[#9F49F5] p-1 rounded-xl m-2 hover:scale-100' key={item._id}>
                          <div className='bg-[#3B2164] rounded-xl p-3 lg:flex justify-between'>
                            <div className='flex'>
                              <div>
                                <img src={ReactLogo}></img>
                              </div>
                              <div className='lg:flex lg:items-center w-[800px] lg:justify-between'>
                                <p className='text-xl overflow-hidden lg:text-3xl'><b>{item.title}</b></p>
                                <div className='flex items-center'>
                                  <img src={LinkIcon}></img>
                                  <div className='w-full'>
                                    <a href={`https://${item.domain.domain_name}`} target='_blank' className=''>{item.domain.domain_name}</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <p>Packet : {item.packet_name}</p> */}
                            <div className='flex items-center'>
                              <p>Status : </p>
                              <div className={` w-2 h-2 rounded-full mx-1 ${getstatusColor(item.status)}`}></div>
                              <p>{item.status}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Overview
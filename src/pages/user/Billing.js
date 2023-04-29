import React, { useEffect } from 'react'
import UserHeader from '../../components/UserHeader'
import AddIcon from '../../assets/addIcon.svg'
import SearchIcon from '../../assets/searchIcon.svg'
import ReactLogo from '../../assets/reactLogo.svg'
import LinkIcon from '../../assets/linkIcon.svg'
import UserSidebar from '../../components/UserSidebar'
// static data
const overview_content = [
  {
    title: "Fp ecommerce",
    subscribion: "Daily",
    total: "10.000",
    status: "Paid"
  },
  {
    title: "Fp ecommerce backend",
    subscribion: "Daily",
    total: "10.000",
    status: "Waiting payment"
  },
  {
    title: "Fp ecommerce",
    subscribion: "Daily",
    total: "10.000",
    status: "Waiting deployment"
  },
  {
    title: "Fp ecommerce",
    subscribion: "Daily",
    total: "10.000",
    status: "Waiting deployment"
  },
  {
    title: "Fp ecommerce",
    subscribion: "Daily",
    total: "10.000",
    status: "Waiting deployment"
  },
]

function Billing() {
  useEffect(() => {
    document.body.style.backgroundColor ="#1F004F"
  })

  const getstatusColor = (status) => {
    if (status === "Paid"){
      return 'bg-green-400'
    }else if(status === 'Update requested') {
      return 'bg-[#FFE600]'
    }else {
      return 'bg-[#FF0000]'
    }
  }
  return (
    <div className='absolute bg-[#1F004F] w-screen h-screen overflow-auto text-white'>
      <div className='flex'>
        <UserSidebar/>
        <div className='w-full h-full'>
          <UserHeader pageTitle="Billing"></UserHeader>
          <div>
            <div className='flex justify-between p-2'>
              <p className='text-xl lg:text-3xl md:hidden'><b>Overview</b></p>
              <div className='bg-[#8000FF] rounded-md flex px-1 py-2 w-32 sm:hidden'>
                <img src={AddIcon} className='w-8'></img>
                <div className='flex items-center'>
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
                <div className='flex items-center'>
                  <p>Add Project</p>
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className='flex justify-center items-start'>
            <div className='flex max-w-[100rem] flex-wrap'>
              {/* card */}
                {
                  overview_content.map((item) => (
                    <div></div>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
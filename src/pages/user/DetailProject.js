import React, { useEffect } from 'react'
import UserHeader from '../../components/UserHeader'
import AddIcon from '../../assets/addIcon.svg'
import SearchIcon from '../../assets/searchIcon.svg'
import ReactLogo from '../../assets/reactLogo.svg'
import LinkIcon from '../../assets/linkIcon.svg'
import DetailProjectSidebar from '../../components/DetailProjectSidebar'
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
        <DetailProjectSidebar/>
        <div className='w-full h-full flex flex-col p-2'>
          <UserHeader pageTitle="Project"></UserHeader>
          <div className='w-full h-full  bg-[#9F49F5] p-1 rounded-xl'>
            {
              DetailProjectContent.map((item) => (

                <div className='bg-[#3B2164] w-full h-full rounded-xl md:flex md:p-10  md:justify-between'>
                  <div>
                    <p className='text-2xl p-2 md:text-2xl'><b>{item.title}</b></p>
                    <div className='p-3'>
                      <p className='md:text-xl'>Domain : {item.domain}</p>
                      <p className='md:text-xl'>Service type : {item.service_type}</p>
                      <p className='md:text-xl'>Programing Language : {item.programing_language}</p>
                      <div className='flex items-center'>
                        <p className='md:text-xl'>Status: </p>
                        <div className={` w-2 h-2 rounded-full mx-1 md:mx-2 ${getstatusColor(item.Status)}`}></div>
                        <p className='md:text-xl'>{item.Status}</p>
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
                          item.history.map((history) => (
                            <li>{history}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>   
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProject
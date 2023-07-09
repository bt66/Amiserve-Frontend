import React from 'react'
import LogoAmiserve from '../assets/amiserv.svg'
import OverviewIcon from '../assets/overview.svg'
import PaymentIcon from '../assets/payment.svg'
import LogoutIcon from '../assets/logout.svg'
import { Link, useNavigate } from "react-router-dom";

function UserSidebar() {
    const navigete = useNavigate();

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.clear()
        navigete('/')
    }
  return (
    <div className='hidden md:block w-96 h-screen p-4 sticky top-0 right-0'>
        <div className='bg-[#462E6C] w-full h-full rounded-2xl relative'>
            <div className='flex flex-col p-1'>
                <Link to={`/user/overview`}>
                    <div className='flex'>
                        <img src={LogoAmiserve}></img>
                        <div className='flex justify-center items-center'>
                            <p className='text-2xl'><b>Amiserv</b></p>
                        </div>
                    </div>
                </Link>
                <Link to={`/user/overview`}>
                    <div className='hover:bg-[#786891] rounded-xl p-2 flex items-center mt-11 mx-3'>
                        <img src={OverviewIcon} alt='overview'></img>
                        <p className='text-xl mx-8'><b>Overview</b></p>
                    </div>
                </Link>
                {/* <Link to={`/user/billing`}>
                    <div className='hover:bg-[#786891] rounded-xl p-2 flex items-center mt-4 mx-3'>
                        <img src={PaymentIcon} alt='billing'></img>
                        <p className='text-xl mx-8'><b>Billing</b></p>
                    </div>
                </Link> */}
                <div className=' absolute bottom-4 flex w-full items-center justify-center mt-4' onClick={handleLogout}>
                    <div className='rounded-xl hover:bg-[#786891] w-11/12 flex items-center justify-center'>
                        <img src={LogoutIcon} alt='logout'></img>
                        <p className='text-xl mx-8'><b>Logout</b></p>
                    </div>
                </div>
                {/* <Link to={`/`}>
                </Link> */}
            </div>
            
        </div>
    </div>
  )
}

export default UserSidebar
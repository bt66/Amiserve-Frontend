import React, { useState } from 'react'
import HamburgerIcon from '../assets/hamburger.svg';
import AmiserveLogo from '../assets/amiserv.svg'
import CloseIcon from '../assets/close.svg'
import { Link } from "react-router-dom";
import OverviewIcon from "../assets/overview.svg"
import Billing from "../assets/payment.svg"

export default function UserHeader(props) {
    const [showSidebar, setShowSideBar] = useState(false);
    return (
        <div className='sticky top-0  z-10'>
            {/* sidebar mobile*/}
            <div className={`absolute bg-black h-screen w-9/12 z-10 ease-in-out duration-300 md:hidden ${showSidebar ? "translate-x-0":"translate-x-[-120%]"}`}>
                <div className='relative w-full h-full'>
                    <div>
                        <Link to='/user/profile'>
                            <div className='cursor-pointer'>
                                <img src={AmiserveLogo} alt='amiserveLogo' className='cursor-pointer w-30'></img>
                            </div>
                        </Link>
                        {/* navbar menu */}
                        <div className='mt-10'>
                            <Link to='/user/overview'>
                                <div className='cursor-pointer p-2 m-2 hover:bg-[#7A1EA6] rounded-md flex justify-start'>
                                    <img src={OverviewIcon} alt='Overview' className='mx-4'></img>
                                        <div className='flex items-center'>
                                            <p className='text-2xl text-center'><b>Overview</b></p>
                                        </div>
                                </div>
                            </Link>
                            <Link to='/user/billing'>
                                <div className='cursor-pointer p-2 m-2 hover:bg-[#7A1EA6] rounded-md flex justify-start'>
                                    <img src={Billing} alt='Billint' className='mx-4'></img>
                                    <div className='flex items-center'>
                                        <p className='text-2xl text-center'><b>Billing</b></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='absolute bottom-px w-full p-2'>
                        <Link to={`/login`}>
                            <div className='cursor-pointer p-2 rounded-md my-4 border-2'>
                                <p className='text-xl text-center'><b>Profile Setting</b></p>
                            </div>
                        </Link>
                        <Link to={`/login`}>
                            <div className='cursor-pointer p-2 bg-purple-700 hover:bg-purple-800 rounded-md my-4'>
                                <p className='text-xl text-center'><b>Logout</b></p>
                            </div>
                        </Link>
                        {/* <div className='bg-red-200 w-full h-10 bottom-0 left-0'></div> */}
                    </div>
                </div>
            </div>
            <div className='p-4 flex justify-between md:hidden'>
                <div className='flex justify-center items-center'>
                    <p className='text-2xl'><b>Amiserv</b></p>
                </div>
                <div className='' onClick={() => setShowSideBar(!showSidebar)}>
                <img src={showSidebar? CloseIcon : HamburgerIcon} alt='hamburgerIcon' className=''></img>
                </div>
            </div>
            {/* large navbar */}
            <div className='hidden h-36 w-full md:flex items-center'>
                <div className='flex justify-between items-center mx-10 w-full'>
                    <div>
                        <p className='text-3xl'><b>{props.pageTitle}</b></p>
                    </div>
                    {/* profile */}
                    <Link to='/user/profile'>
                        <div className='rounded-full p-1 bg-[#EE65EE]'>
                            <div className='bg-black bg-opacity-100 rounded-full w-20 h-20 relative overflow-hidden'>
                                <img src={AmiserveLogo} alt='profile w-100'></img>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
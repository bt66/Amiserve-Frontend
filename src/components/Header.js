import React, { useState } from 'react'
import HamburgerIcon from '../assets/hamburger.svg';
import AmiserveLogo from '../assets/amiserv.svg'
import CloseIcon from '../assets/close.svg'
import { Link, useNavigate } from "react-router-dom";
import { useRef } from 'react';

export default function Header(props) {
    const [showSidebar, setShowSideBar] = useState(false);
    const navigate = useNavigate();

    const executeScroll = () => {
        navigate("/")
        props.serviceRef.current.scrollIntoView()
        // 
    }
    return (
        <div className='sticky top-0 bg-black bg-opacity-30'>
            {/* sidebar mobile*/}
            <div className={`absolute bg-black bg-opacity-90 h-screen w-9/12 z-10 ease-in-out duration-300 md:hidden ${showSidebar ? "translate-x-0":"translate-x-[-100%]"}`}>
                <div className='relative w-full h-full'>
                    <div>
                        <div className='cursor-pointer'>
                            <img src={AmiserveLogo} alt='amiserveLogo' className='cursor-pointer w-30'></img>
                        </div>
                        {/* navbar menu */}
                        <div className='mt-10'>
                            <Link to={`/`}>
                                <div className='cursor-pointer p-2 m-2 hover:bg-[#7A1EA6] rounded-md'>
                                    <p className='text-2xl text-center'><b>Home</b></p>
                                </div>
                            </Link>
                            <Link to={`/about`}>
                                <div className='cursor-pointer p-2 m-2 hover:bg-[#7A1EA6] rounded-md'>
                                    <p className='text-2xl text-center'><b>About</b></p>
                                </div>
                            </Link>
                            <div className='cursor-pointer p-2 m-2 hover:bg-[#7A1EA6] rounded-md' onClick={executeScroll}>
                                <p className='text-2xl text-center'><b>Services</b></p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-px w-full p-2'>
                        <Link to={`/login`}>
                            <div className='cursor-pointer p-2 bg-purple-700 hover:bg-purple-800 rounded-md my-4'>
                                <p className='text-xl text-center'><b>Login</b></p>
                            </div>
                        </Link>
                        <Link to={`/register`}>
                            <div className='cursor-pointer p-2 border-2 rounded-md my-4'>
                            <p className='text-xl text-center'><b>Register</b></p>
                            </div>
                            {/* <div className='bg-red-200 w-full h-10 bottom-0 left-0'></div> */}
                        </Link>
                    </div>
                </div>
            </div>
            <div className='p-4 flex justify-between md:hidden'>
                <div className='flex justify-center items-center'>
                    <p className='text-2xl'><b>Amiserve</b></p>
                </div>
                <div className='' onClick={() => setShowSideBar(!showSidebar)}>
                <img src={showSidebar? CloseIcon : HamburgerIcon} alt='hamburgerIcon' className=''></img>
                </div>
            </div>
            {/* large navbar */}
            <div className='hidden h-36 w-full md:flex justify-around items-center'>
                <div className='hover:animate-bounce'>
                    <img src={AmiserveLogo} alt='amiserveLogo'></img>
                </div>
                <div className='flex'>
                    <Link to={`/`}>
                        <p className='cursor-pointer text-2xl mx-4 hover:text-gray-300'><b>HOME</b></p>
                    </Link>
                    <Link to={`/about`}>
                        <p className='cursor-pointer text-2xl mx-4 hover:text-gray-300'><b>ABOUT</b></p>
                    </Link>
                    <p className='cursor-pointer text-2xl mx-4 hover:text-gray-300' onClick={executeScroll}><b>SERVICES</b></p>
                </div>
                <div className='flex content-center items-center'>
                    <Link to={`/login`}>
                        <p className='cursor-pointer text-2xl mx-6 hover:text-gray-300'><b>LOGIN</b></p>
                    </Link>
                    <Link to={`/register`}>
                        <div>
                            <div className='cursor-pointer bg-white px-2 py-3 rounded-md hover:bg-slate-100'>
                                <p className='text-[#1F004F] text-2xl mx-4'><b>SIGN UP</b></p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
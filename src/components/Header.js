import React, { useState } from 'react'
import HamburgerIcon from '../assets/hamburger.svg';
import AmiserveLogo from '../assets/amiserv.svg'
import CloseIcon from '../assets/close.svg'

export default function Header(props) {
    const [showSidebar, setShowSideBar] = useState(false);
    return (
        <div className='sticky top-0 bg-black bg-opacity-30'>
            {/* sidebar */}
            <div className={`absolute bg-black bg-opacity-90 h-screen w-9/12 z-10 ease-in-out duration-300 sm:hidden ${showSidebar ? "translate-x-[-100%]":"translate-x-0"}`}>
                <div className='relative w-full h-full'>
                    <div>
                        <div className='cursor-pointer'>
                            <img src={AmiserveLogo} className='cursor-pointer w-30'></img>
                        </div>
                        {/* navbar menu */}
                        <div className='mt-10'>
                            <div className='cursor-pointer p-2 m-2 hover:bg-[#7A1EA6] rounded-md'>
                                <p className='text-2xl text-center'><b>Home</b></p>
                            </div>
                            <div className='cursor-pointer p-2 m-2 hover:bg-[#7A1EA6] rounded-md'>
                                <p className='text-2xl text-center'><b>About</b></p>
                            </div>
                            <div className='cursor-pointer p-2 m-2 hover:bg-[#7A1EA6] rounded-md'>
                                <p className='text-2xl text-center'><b>Services</b></p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-px w-full p-2'>
                        <div className='cursor-pointer p-2 bg-purple-700 hover:bg-purple-800 rounded-md my-4'>
                            <p className='text-xl text-center'><b>Login</b></p>
                        </div>
                        <div className='cursor-pointer p-2 border-2 rounded-md my-4'>
                        <p className='text-xl text-center'><b>Register</b></p>
                        </div>
                        {/* <div className='bg-red-200 w-full h-10 bottom-0 left-0'></div> */}
                    </div>
                </div>
            </div>
            <div className='p-4 flex justify-between sm:hidden'>
                <div className='flex justify-center items-center'>
                    <p className='text-2xl'><b>Amiserve</b></p>
                </div>
                <div className='' onClick={() => setShowSideBar(!showSidebar)}>
                <img src={showSidebar? HamburgerIcon : CloseIcon} className=''></img>
                    {/* {
                    showSidebar ? 
                     : <img src={CloseIcon} className={`${!showSidebar
                        ? "rotate-180 delay-200 ease-in-out" : ""}`}></img>
                } */}
                </div>
            </div>
            {/* large navbar */}
            <div className='hidden h-36 w-full sm:flex justify-around items-center'>
                <img src={AmiserveLogo}></img>
                <div className='flex'>
                    <p className='text-2xl mx-4'><b>HOME</b></p>
                    <p className='text-2xl mx-4'><b>ABOUT</b></p>
                    <p className='text-2xl mx-4'><b>SERVICES</b></p>
                </div>
                <div className='flex content-center items-center'>
                    <p className='text-2xl mx-6'><b>LOGIN</b></p>
                    <div>
                        <div className='bg-white px-2 py-3 rounded-md'>
                            <p className='text-[#1F004F] text-2xl mx-4'><b>SIGN UP</b></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
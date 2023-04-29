import React, { useEffect } from 'react'
import Header from '../components/Header'
import AmiserveLogo from '../assets/amiserv.svg'
import FaizProfile from '../assets/faiz.jpeg'
import AzizProfile from '../assets/aziz.jpeg'
import BasProfile from "../assets/bastian.jpeg"
import Footer from '../components/Footer'
const team = [
    {
        image: FaizProfile,
        alternative: "faiz",
        name: "Miftahudin Faiz",
        role: "Project Owner",
    },
    {
        image: FaizProfile,
        alternative: "satya",
        name: "Satya Tegar Kusuma",
        role: "Scrum Master",
    },
    {
        image: AzizProfile,
        alternative: "aziz",
        name: "Fatthurahman Nur Aziz",
        role: "Backend",
    },
    {
        image: BasProfile,
        alternative: "bastian",
        name: "Muhammad Bastian Hanafi",
        role: "Frontend",
    }
]

function About() {
    useEffect(() => {
        document.body.style.backgroundColor ="#1F004F"
    })
    return (
        <div className='text-white'>
            <Header></Header>
            <div className='md:flex md:justify-around md:items-center'>
                <div className='md:flex md:flex-col'>
                    <div>
                        <p className='text-5xl text-center mt-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D7F4] to-[#FFFFFF] max-w-md lg:text-7xl'>Amiserve</p>
                    </div>
                    <div className='items-center justify-center flex md:hidden'>
                        <img src={AmiserveLogo} alt='amiserve' className='w-52'></img>
                    </div>
                    <div>
                        <p className='text-xl text-center mt-5 md:max-w-md lg:text-2xl lg:mt-16'>Amiserve is a Software as a Service  developed by no_sh team, we responsible for hosting, maintaining, and updating service tht you have.</p>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <img src={AmiserveLogo} alt='amiserve' className='w-80'></img>
                </div>
            </div>
            <div className='mt-32'>
                <p className='text-2xl text-center lg:text-6xl'><b>Our Team</b></p>
                <p className='text-xl text-center lg:text-4xl lg:mt-8'><b>no_sh</b></p>
                <div className='mt-16 sm:flex item-center justify-around'>
                    {
                        team.map((item, index) => (
                            <div className='mt-4'>
                                <div className='flex item-center justify-center'>
                                    <div className='flex w-32 h-32 md:w-36 md:h-36 lg:h-44 lg:w-44 items-center justify-center overflow-hidden rounded-full bg-red-200'>
                                        <img src={item.image} alt={item.alternative} id={index} className='w-40 object-fill'></img>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-center w-32 md:w-36 lg:w-44 lg:text-2xl'><b>{item.name}</b></p>
                                    <p className='text-center lg:text-xl lg:mt-3'>{item.role}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
            <div className='mt-28'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default About
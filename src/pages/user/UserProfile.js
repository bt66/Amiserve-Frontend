import React, { useState, useEffect } from 'react'
import BackgroundImageWeave from '../../assets/wave.svg'
import AmiserveLogo from "../../assets/amiserv.svg"
import MailLogo from "../../assets/mail.svg"
import CloseLogo from "../../assets/close.svg"
import { useForm } from "react-hook-form";
import axios from 'axios'
import Loading from '../../components/Loading'
import { useNavigate } from 'react-router-dom'

function UserProfile() {
    const navigate = useNavigate()
    const [userData,setUserData] = useState();
    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.REACT_APP_BACKEND_URL}/user/${localStorage.getItem("userId")}`,
            headers: { }
        };
        axios.request(config)
        .then((response) => {
            setUserData(response.data.user)
        //   console.log('ini userdata')
        // console.log(response)
        //   console.log(userData)
        })
        .catch((error) => {
        console.log(error);
        });
    },[fetched])
    
    useEffect(() => {
        document.body.style.backgroundColor ="#1F004F"
    })

    
    
    const { handleSubmit, register, setValue, reset, formState: { errors } } = useForm({
    })
    useEffect(() => {
        if (userData) {
            reset({
                username: userData.username,
                email: userData.email,
                nomor: userData.nomor
            })
        }
    },[userData])
    
    const handleUpdateProfile = ((values) => {
        console.log(values);
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${process.env.REACT_APP_BACKEND_URL}/user/${localStorage.getItem("userId")}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : values
          };
          setFetched(true)
          axios.request(config)
          .then((response) => {
            setFetched(false)
            console.log(JSON.stringify(response.data));
            setModalEdit(!showModalEdit)
          })
          .catch((error) => {
            setFetched(false)
            console.log(error);
            setModalEdit(!showModalEdit)
          });
          
    })
    const [showModalEdit, setModalEdit] = useState(false)
    const handleCloseUpdateProfile = () => {
        setModalEdit(!showModalEdit)
        console.log(showModalEdit)
    }

    if (localStorage.getItem('userId') == undefined){
        navigate("/login");
      }else {
        return (

            <div className='text-white relative w-full h-screen'>
                
                <div className='absolute w-full z-20 top-0 lg:hidden'>
                    <div className='bg-[#5000ca] w-full h-36'>
                    </div>
                    <div className=''>
                        <img src={BackgroundImageWeave} alt='weave-background'/>
                        
                    </div>
                </div>
                
                <div className='absolute z-50 w-full p-5 lg:flex lg:flex-col items-center'>
                    <div className='flex flex-col items-center justify-center z-10 mt-10 sm:mt-16 md:mt-24'>
                        <div>
                            <p className='text-center text-2xl sm:text-3xl font-bold md:text-4xl'>{userData ? userData.username : ""}</p>
                        </div>
                        <div className='rounded-full p-1 bg-[#EE65EE] mt-12 sm:mt-16 md:mt-20 lg:mt-30'>
                            <div className='flex w-32 h-32 md:w-36 md:h-36 lg:h-44 lg:w-44 items-center justify-center overflow-hidden rounded-full bg-black'>
                                <img src={AmiserveLogo} alt='profile w-100'></img>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#4A326F] rounded-xl mt-7 text-xl font-bold p-3 max-w-3xl w-full lg:mt-32'>
                        <div className='flex'>
                            <p>Email : {userData ? userData.email : ""}</p>
                        </div>
                        <p className='mt-2'>Phone number : {userData ? userData.nomor : ""}</p>
                    </div>
                    <div className='bg-[#3C47A3] w-full rounded-xl px-2 py-4 mt-10 max-w-3xl lg:mt-20' onClick={handleCloseUpdateProfile}>
                        <p className='text-center text-xl font-bold'>Edit data</p>
                    </div>
                </div>
                {/* form edit profile */}
                {userData ? 
                
                    <div className={showModalEdit ? "absolute w-full h-full z-50 top-0 bg-black bg-opacity-50 flex items-center justify-center" : "hidden"}>
                        <div className='bg-[#9F49F5] p-1 rounded-xl max-w-2xl'>
                            <div className='bg-[#3B2164] rounded-xl p-2'>
                                <div className='flex justify-between items-center'>
                                    <div className='text-2xl'>
                                        <p>Edit Profile</p>
                                    </div>
                                    <div onClick={handleCloseUpdateProfile} >
                                        <img src={CloseLogo} alt='close'></img>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit(handleUpdateProfile)}>
                                    <div className='mt-1 flex flex-col p-2'>
                                        <div className='relative'>
                                            <br/>
                                            <label htmlFor='username' className='w-full lg:text-xl mt-3'><b>username :</b></label>
                                            <input 
                                                type="text"
                                                id='username'
                                                name="username" 
                                                placeholder='Amiserv' 
                                                {...register("username", {
                                                    required: "username is required",
                                                })}
                                                className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'
                                            />
                                            <p className='text-red-400'>{errors.username && errors.username.message}</p>

                                            {/* email */}
                                            <label htmlFor='email' className='w-full lg:text-xl mt-3'><b>email :</b></label>
                                            <input 
                                                type="text"
                                                id='email'
                                                name="email" 
                                                placeholder='mail@amiserv.cloud'  
                                                {...register("email", {
                                                    required: "email is required",
                                                })}
                                                className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'
                                            />
                                            <p className='text-red-400'>{errors.email && errors.email.message}</p>

                                            {/* phone number */}
                                            <label htmlFor='phoneNumber' className='w-full lg:text-xl mt-3'><b>phone number :</b></label>
                                            <input 
                                                type="text"
                                                id='phoneNumber'
                                                name="phoneNumber" 
                                                placeholder='+628 ...'
                                                {...register("nomor", {
                                                    required: "phoneNumber is required",
                                                })}
                                                className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'
                                            />
                                            <p className='text-red-400'>{errors.phoneNumber && errors.phoneNumber.message}</p>

                                        </div>
                                    </div>
                                    <div className="flex justify-end p-3">
                                        <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md">
                                            <div>
                                                <p>Update Data {`>`} </p>
                                            </div>
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        
                    </div>
                :
                    <p></p>
                }
                {fetched === true ? 
                    <div className='absolute z-50'>
                        <Loading></Loading>
                    </div>
                :
                ""
                }
            </div>
        )
    }
}

export default UserProfile
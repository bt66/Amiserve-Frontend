import React, { useState, useEffect } from 'react'
import BackgroundImageWeave from '../../assets/wave.svg'
import AmiserveLogo from "../../assets/amiserv.svg"
import MailLogo from "../../assets/mail.svg"
import CloseLogo from "../../assets/close.svg"
import { useForm } from "react-hook-form";

const data = {
    profilePicture: "https://hhh",
    username: "asdf",
    email: "asdf@gmail.com",
    phoneNumber: "0861645"
}

function UserProfile() {
    const [updateData, setUpdateData] = useState({
        profilePicture: "https://hhh",
        username: "asdf",
        email: "asdf@gmail.com",
        phoneNumber: "0861645"
    });
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        console.log(value)
        
        // console.log(event.target.file)
        setUpdateData((prevProps) => ({
            ...prevProps,
            [name]: value
        }))
    }    
    
    useEffect(() => {
        document.body.style.backgroundColor ="#1F004F"
    })

    
    const { handleSubmit, register, setValue, formState: { errors } } = useForm({
        defaultValues: {
            profile_picture: data.profilePicture,
            username: data.username,
            email:data.email,
            phoneNumber: data.phoneNumber
        }
      })      

    const handleUpdateProfile = ((values) => {
        console.log(values);
    })
    const [showModalEdit, setModalEdit] = useState(false)
    const handleCloseUpdateProfile = () => {
        setModalEdit(!showModalEdit)
        console.log(showModalEdit)
    }
    return (
        <div className='text-white relative w-full h-screen'>
            <div className='absolute w-full z-20 top-0 lg:hidden'>
                <div className='bg-[#5000ca] w-full h-36'>
                </div>
                <div className=''>
                    <img src={BackgroundImageWeave} alt='weave-background'></img>
                </div>
            </div>
            <div className='absolute z-50 w-full p-5 lg:flex lg:flex-col items-center'>
                <div className='flex flex-col items-center justify-center z-10 mt-10 sm:mt-16 md:mt-24'>
                    <div>
                        <p className='text-center text-2xl sm:text-3xl font-bold md:text-4xl'>no_sh</p>
                    </div>
                    <div className='rounded-full p-1 bg-[#EE65EE] mt-12 sm:mt-16 md:mt-20 lg:mt-30'>
                        <div className='flex w-32 h-32 md:w-36 md:h-36 lg:h-44 lg:w-44 items-center justify-center overflow-hidden rounded-full bg-black'>
                            <img src={AmiserveLogo} alt='profile w-100'></img>
                        </div>
                    </div>
                </div>
                <div className='bg-[#4A326F] rounded-xl mt-7 text-xl font-bold p-3 max-w-3xl w-full lg:mt-32'>
                    <div className='flex'>
                        <p>Email : bastian.bt66@gmail.com</p>
                    </div>
                    <p className='mt-2'>Phone number : 085156924042</p>
                </div>
                <div className='bg-[#3C47A3] w-full rounded-xl px-2 py-4 mt-10 max-w-3xl lg:mt-20' onClick={handleCloseUpdateProfile}>
                    <p className='text-center text-xl font-bold'>Edit data</p>
                </div>
            </div>
            {/* form edit profile */}
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
                                    {/* edit Username Form */}
                                    <label htmlFor='profile_picture' className='w-full lg:text-xl mt-3'><b>Profile Picture :</b></label>
                                    <br></br>
                                    <input 
                                        type="file"
                                        id='profile_picture'
                                        name="profile_picture"
                                        {...register("profile_picture", {
                                        })}
                                        // className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'
                                    />
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
                                        onChange={handleInputChange}
                                        {...register("phoneNumber", {
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
            
        </div>
    )
}

export default UserProfile
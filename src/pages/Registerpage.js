import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import HidePasswordIcon from "../assets/passwordHide.svg"
import ShowPasswordIcon from "../assets/passwordShow.svg"
import RegisterVector from "../assets/register_vector.svg"

function Registerpage() {
  // const { handleSubmit, register, formState: { errors } } = useForm();
  const { handleSubmit, register, formState: { errors } } = useForm();

  const [hidePassword, setHidePassword] = useState(true);
  const [formPasswordType, setFormPasswordType] = useState("password");

  const handleLogin = ((values) => {
    console.log(values);
})

  const handleHideAndShowPassword = (event) => {
    event.preventDefault();
    setHidePassword(!hidePassword);
    if(formPasswordType === "password") {
      setFormPasswordType("text");
    }else {
      setFormPasswordType("password");
    }
  }

  return (
    <div className='bg-[#330099] absolute w-full h-full text-white'>
        {/* login card container */}
        <div className='flex items-center justify-center w-screen h-screen md:justify-center md:p-10'>
            <div className='bg-[#9F49F5] p-1 rounded-3xl md:w-8/12 md:h-10/12 lg:max-w-xl'>
                <div className='bg-[#41024B] rounded-3xl p-4 md:w-full md:h-full'>
                    <div className=''>
                    <p className='text-3xl text-center lg:mt-10'><b>SignUp</b></p>
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)} className='mt-10'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col items-center'>
                        <label htmlFor="email" className='w-full lg:text-xl'><b>Email :</b></label>
                        <input
                            type="email" 
                            name="email"
                            id='email'
                            placeholder='Email' 
                            {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                            })}
                            className='bg-[#5D2E80] px-3 py-2 rounded-xl w-full border-2 border-[#789AF2] lg:px-[1rem] lg:py-4 lg:w-96'/>
                        <div className='w-full'>
                            <p className='text-red-400'>{errors.email && errors.email.message}</p>
                        </div>
                        </div>
                        <div className='mt-1 flex flex-col items-center'>
                        <label htmlFor='username' className='w-full lg:text-xl mt-3'><b>Username :</b></label>
                        <div className='relative'>
                            <input 
                            type="text"
                            id='username'
                            name="username" 
                            placeholder='username' 
                            {...register("username", {
                                required: "username is required",
                            })}
                            className='bg-[#5D2E80] px-3 py-2 rounded-xl w-full border-2 border-[#789AF2] lg:px-[1rem] lg:py-4 lg:w-96'/>
                            <p className='text-red-400'>{errors.username && errors.username.message}</p>
                        </div>
                        </div>
                        <div className='mt-1 flex flex-col items-center'>
                        <label htmlFor='password' className='w-full lg:text-xl mt-2'><b>Password :</b></label>
                        <div className='relative'>
                            <input 
                            type={formPasswordType}
                            id='password'
                            name="password" 
                            placeholder='Password' 
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className='bg-[#5D2E80] px-3 py-2 rounded-xl w-full border-2 border-[#789AF2]  lg:px-[1rem] lg:py-4 lg:w-96'/>
                            <div className='absolute top-0 right-0 w-8 h-full flex justify-center items-center mr-2' onClick={handleHideAndShowPassword}>
                                <img src={hidePassword ? HidePasswordIcon : ShowPasswordIcon} className=''></img>
                            </div>
                        </div>
                        <div className='w-full h-full'>
                            <p className='text-red-400'>{errors.password && errors.password.message}</p>
                        </div>
                        </div>
                        <p className='text-white mt-6'>Already have account? <Link to={'/SignUp'}><span><u>Login</u></span></Link></p>
                        <div className='flex justify-center items-center'>
                            <button type="submit" className='mt-6 mb-8 lg:mb-10'>
                                <div className='bg-gradient-to-r from-[#EE65EE] from-2% via-[#8000FF] via-50% to-[#8000FF] to-90% p-[2px] rounded-full lg:p-[4px]'>
                                    <div className='bg-gradient-to-r from-[#7A1EA6] from-2% via-[#3F3DA4] via-50% to-[#3F3DA4] to-90% rounded-full px-10 py-2'>
                                        <p className='lg:text-2xl'>Register</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div>
                    <img src={RegisterVector} className='hidden w-full md:block lg:max-w-xl'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registerpage
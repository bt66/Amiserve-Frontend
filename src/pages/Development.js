import React from 'react'
import { useForm } from "react-hook-form";

const Development = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div className='bg-green-100 w-full h-full absolute'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
            className='border-2'
            type="email"
            {...register("email", {
            required: "Required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
            })}
        />
        {errors.email && errors.email.message}

        <input
            className='border-2'
            {...register("username", {
            validate: value => value !== "admin" || "Nice try!"
            })}
        />
        {errors.username && errors.username.message}

        <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default Development
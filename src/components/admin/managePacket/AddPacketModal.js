import React from 'react'
import AdminModal from '../AdminModal'
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';

function AddPacketModal(props) {
	const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ 
    mode: "all",
  });
  const onSubmitAdd = (values) => {
    console.log(values)

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/packet`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : values
    };
    props.notifyChangeVar(true)
    axios.request(config)
    .then((response) => {
      props.notifyChangeVar(false)
      console.log(JSON.stringify(response.data));
      props.handleCloseModal()
    })
    .catch((error) => {
      props.notifyChangeVar(false)
      props.handleCloseModal()
      console.log(error);
    });

  };
  return (
    <AdminModal openModalUpdate={props.openModalAdd} handleCloseModalUpdate={props.handleCloseModal}>
        <h2 id="parent-modal-title">Add Packet</h2>
        <form onSubmit={handleSubmit(onSubmitAdd)}>
        {/* project title */}
          <div className='mt-1 flex flex-col p-2'>
            <label htmlFor='projectTitle' className='w-full lg:text-xl mt-3'><b><span className="text-red-500">*</span>type:</b></label>
            <div className='relative'>
              <input 
              type="number"
              id='packetType'
              name="packetType" 
              placeholder='Type must be a number' 
              {...register("type", {
                  required: "packetType is required",
              })}
              className='bg-[#313031] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'/>
              <p className='text-red-400'>{errors.packetType && errors.packetType.message}</p>
            </div>
          </div>
          {/* source_code_url */}
          <div className='mt-1 flex flex-col p-2'>
              <label htmlFor='packetName' className='w-full lg:text-xl mt-3'><b><span className="text-red-500">*</span>Packet Name :</b></label>
              <div className='relative'>
                <input 
                type="text"
                id='packetName'
                name="packetName" 
                placeholder='Packet Name' 
                {...register("name", {
                    required: "packetName is required",
                })}
                className='bg-[#313031] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'/>
                <p className='text-red-400'>{errors.packetName && errors.packetName.message}</p>
              </div>
          </div>
          
          <div className='mt-1 flex flex-col p-2'>
              <label htmlFor='price' className='w-full lg:text-xl mt-3'><b><span className="text-red-500">*</span>Price:</b></label>
              <div className='relative'>
                <input 
                type="number"
                id='price'
                name="price" 
                placeholder='Price' 
                {...register("price", {
                    required: "price is required",
                })}
                className='bg-[#313031] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'/>
                <p className='text-red-400'>{errors.price && errors.price.message}</p>
              </div>
          </div>

          <div className='mt-1 flex flex-col p-2'>
              <label htmlFor='description' className='w-full lg:text-xl mt-3'><b><span className="text-red-500">*</span>Description :</b></label>
              <div className='relative'>
                <input 
                type="text"
                id='description'
                name="description" 
                placeholder='Description' 
                {...register("description", {
                    required: "description is required",
                })}
                className='bg-[#313031] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'/>
                <p className='text-red-400'>{errors.description && errors.description.message}</p>
              </div>
          </div>
          <div className="flex justify-end p-3">
            <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md">
                <div>
                    <p>Next {`>`} </p>
                </div>
            </button>
          </div>
        </form>
    </AdminModal>
  )
}

export default AddPacketModal
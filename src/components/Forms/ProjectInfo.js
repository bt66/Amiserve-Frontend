
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";
import axios from "axios";

function ProjectInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const[dataPacket, setDataPacket] = useState([]);
  const [fetched, setFeched] = useState(false);

  useEffect(() => {
    var config = {
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/packet`,
    };
    axios(config)
    .then(response => 
        {
          setDataPacket(response.data.packet)
          // setFeched(true)
          console.log("ini data")
          console.log(dataPacket)
            
        })
    .catch(function (error) {
        console.log(error)
        // if unauthorized redirect to login
        // if(error.response.status == 401){
        //     navigate("/login");
        // }
    })
  }, [fetched])

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    // console.log(values)
    setFormValues(values);
    nextFormStep();
  };

  return (
      <div className={formStep === 0 ? "block": "hidden"}>
      <h2>Project Overview</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      {/* project title */}
        <div className='mt-1 flex flex-col p-2'>
          <label htmlFor='projectTitle' className='w-full lg:text-xl mt-3'><b><span className="text-red-500">*</span>Project Title :</b></label>
          <div className='relative'>
            <input 
            type="text"
            id='projectTitle'
            name="projectTitle" 
            placeholder='Project Title' 
            {...register("title", {
                required: "projectTitle is required",
            })}
            className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4 lg:w-96'/>
            <p className='text-red-400'>{errors.projectTitle && errors.projectTitle.message}</p>
          </div>
        </div>
        {/* source_code_url */}
        <div className='mt-1 flex flex-col p-2'>
            <label htmlFor='repositoryUrl' className='w-full lg:text-xl mt-3'><b><span className="text-red-500">*</span>Project URL :</b></label>
            <div className='relative'>
              <input 
              type="text"
              id='repositoryUrl'
              name="repositoryUrl" 
              placeholder='Repository URL' 
              {...register("source_code_url", {
                  required: "repositoryUrl is required",
              })}
              className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4 lg:w-96'/>
              <p className='text-red-400'>{errors.repositoryUrl && errors.repositoryUrl.message}</p>
            </div>
        </div>
        {/* packet */}
        <div className='mt-1 flex flex-col p-2'>
            <label htmlFor='packetName' className='w-full lg:text-xl mt-3'><b><span className="text-red-500">*</span>Choose packet :</b></label>
            <div className='relative'>
            <select {...register("packet_type", { required: true })}
            className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4 lg:w-96'
            >
              {
                dataPacket.map((item) => (
                  <option key={item._id} value={item.type}>{item.name} - Rp.{item.price}</option>
                ))
              }
            </select>

                <p className='text-red-400'>{errors.packetName && errors.packetName.message}</p>
            </div>
        </div>
        {/* description */}
        {/* <div className="mt-1 flex flex-col p-2">
          <label htmlFor='Description' className='w-full lg:text-xl mt-3'><b>Description : </b></label>
          <textarea
            id='Description'
            name="Description" 
            placeholder='Project description (Optional)'
            className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4 lg:w-96'
            {...register("description", {})} />
        </div> */}
        <div className="flex justify-end p-3">
          <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md">
              <div>
                  <p>Next {`>`} </p>
              </div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProjectInfo
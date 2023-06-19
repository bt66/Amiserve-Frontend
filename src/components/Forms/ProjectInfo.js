
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

function ProjectInfo({ formStep, nextFormStep }) {
    const { setFormValues } = useFormData();

    const {
      handleSubmit,
      formState: { errors },
      register,
    } = useForm({ mode: "all" });
  
    const onSubmit = (values) => {
      console.log(values)
      setFormValues(values);
      nextFormStep();
    };

    return (
        <div className={formStep === 0 ? "block": "hidden"}>
        <h2>Project Overview</h2>
  
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-1 flex flex-col p-2'>
              <label htmlFor='projectTitle' className='w-full lg:text-xl mt-3'><b>Project Title :</b></label>
              <div className='relative'>
                  <input 
                  type="text"
                  id='projectTitle'
                  name="projectTitle" 
                  placeholder='Project Title' 
                  {...register("projectTitle", {
                      required: "projectTitle is required",
                  })}
                  className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4 lg:w-96'/>
                  <p className='text-red-400'>{errors.projectTitle && errors.projectTitle.message}</p>
              </div>
          </div>
          <div className='mt-1 flex flex-col p-2'>
              <label htmlFor='repositoryUrl' className='w-full lg:text-xl mt-3'><b>Project URL :</b></label>
              <div className='relative'>
                  <input 
                  type="text"
                  id='repositoryUrl'
                  name="repositoryUrl" 
                  placeholder='Repository URL' 
                  {...register("repositoryUrl", {
                      required: "repositoryUrl is required",
                  })}
                  className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4 lg:w-96'/>
                  <p className='text-red-400'>{errors.repositoryUrl && errors.repositoryUrl.message}</p>
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
      </div>
    )
}

export default ProjectInfo
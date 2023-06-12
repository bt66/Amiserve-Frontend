
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

export default function PersonalInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div>
      <h2>Personal Info</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

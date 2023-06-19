
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

export default function DomainAndSSL({ formStep, nextFormStep, prevFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    console.log(values)
    nextFormStep();
  };

  return (
    <div className={formStep === 1 ? "block": "hidden"}>
      <h2>Domain And SSL</h2>

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

                {/* <select {...register("sslMode", { required: true })}>
                  <option value="cloudflare-ssl">cloudflare</option>
                  <option value="letsencrypt-ssl">Letsencrypt</option>
                </select> */}
                <input 
                type="radio"
                id='ssl-type1'
                name="ssl-type1" 
                placeholder='Project Title'
                value="lets_encrypt"
                {...register("ssl_type", {
                    required: "ssl-type is required",
                })}
                className=''/>
                <label htmlFor="ssl-type1">Lets encrypt</label>
                <br/>
                <input 
                type="radio"
                id='ssl-type1'
                name="ssl-type1" 
                placeholder='Project Title' 
                value="cloudflare"
                {...register("ssl_type", {
                    required: "ssl-type is required",
                })}
                className=''/>
                <label htmlFor="ssl-type1">Cloudflare proxy</label>
            </div>
        </div>
        <div className="flex justify-between p-3">
            <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md" onClick={prevFormStep}>
                <div>
                    <p>back </p>
                </div>
            </button>
            <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md">
                <div>
                    <p>Next {`>`} </p>
                </div>
            </button>
          </div>
      </form>
    </div>
  );
}

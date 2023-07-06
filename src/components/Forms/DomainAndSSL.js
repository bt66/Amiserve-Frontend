import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

import axios from "axios";

export default function DomainAndSSL({ formStep, nextFormStep, prevFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    // console.log(values)
    nextFormStep();
  };

  const [domainMode, setDomainMode] = useState("")

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    console.log(value)
    setDomainMode(value)
  }

  const [sslMode, setSslMode] = useState("")

  const handleInputChangeSsl = (event) => {
    const {name, value} = event.target;
    console.log(value)
    setSslMode(value)
  }

  return (
    <div className={formStep === 1 ? "block": "hidden"}>
      <h2>Domain And SSL</h2>
      {/* true === amiserv subdomain, false === self domain */}
      <form>
      <label htmlFor='projectTitle' className='w-full lg:text-xl mt-3'><b>Domain name :</b></label>
      <p>Please choose domain type : </p>
        {/* domain mode 0 : amiserv , 1 self */}
        <input 
          type="radio"
          id='domainMode-amiserv'
          name="mode" 
          placeholder='Project Title'
          value="0"
          onClick={handleInputChange}
          {...register("domain_type", {
            required: "Domain type is required",
        })}
          className=''/>
          <label htmlFor="domainMode-amiserv">Amiserv subdomain</label>

          <br></br>
          <input 
            type="radio"
            id='domainMode-self'
            name="mode"
            placeholder='Project Title'
            value="1"
            onClick={handleInputChange}
            {...register("domain_type", {
              required: "Domain type is required",
          })}
            className=''/>
          <label htmlFor="domainMode-self">Your own domain</label>

      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-1 flex flex-col p-2'>
            
            <div className='relative'>
              <input
                type="text"
                id='domain_name'
                name="domain_name" 
                placeholder={domainMode ==="0" ? "fpsatu.amiserv.cloud" : "example.com"}
                {...register("domain_name", {
                    required: "Domain name is required",
                })}
                className={'bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4 lg:w-96'}/>
              <p className='text-red-400'>{errors.domain_name && errors.domain_name.message}</p>
                  
                {/* <select {...register("sslMode", { required: true })}>
                  <option value="cloudflare-ssl">cloudflare</option>
                  <option value="letsencrypt-ssl">Letsencrypt</option>
                </select> */}
                {/* 1 - amiserv , 2 - self*/}
                <p>Please choose ssl certificate : </p>
                <input 
                  type="radio"
                  id='ssl-type1'
                  name="ssl-type1" 
                  placeholder='Project Title'
                  value="1"
                  onClick={handleInputChangeSsl}
                  {...register("ssl_type", {
                      required: "ssl-type is required",
                  })}
                  className=''/>
                  <label htmlFor="ssl-type1">Amiserv</label>
                {/* <label htmlFor="ssl-type1">Lets encrypt</label> */}
                <br/>
                <input 
                  type="radio"
                  id='ssl-type2'
                  name="ssl-type1" 
                  placeholder='Project Title' 
                  value="2"
                  onClick={handleInputChangeSsl}
                  {...register("ssl_type", {
                      required: "ssl-type is required",
                  })}
                  className=''/>
                  <label htmlFor="ssl-type2">Self</label>

                <br/>
                {sslMode === '2' ?
                <div>
                  <input
                  type="text"
                  id='ssl_cert_file'
                  name="ssl_cert_file" 
                  placeholder="SSL cert url"
                  {...register("ssl_cert_file", {
                      required: "SSL cert file is required when you choose self",
                  })}
                  className={'bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4 lg:w-96'}/>
                  <p className='text-red-400'>{errors.ssl_cert_file && errors.ssl_cert_file.message}</p>

                </div>
                  :
                  <p></p>
                }

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


import { useEffect, useState, useRef } from "react";
import { set, useForm } from "react-hook-form";
import { useFormData } from "../../context";
import axios from "axios";

export default function ConfirmPurchase({ formStep, nextFormStep, prevFormStep, resetFormStep }) {
  const { setFormValues } = useFormData();
  const { data } = useFormData();
  const [reqBody, setReqBody] = useState();
  const [statusAddData, setStatusAddData] = useState(false);

  const isFirstRender = useRef(true);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({ mode: "all" });

  // handle add data 
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if initial render
    }
    console.log(data)
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/project/add`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.project));
      // setStatusAddData(true)
      setFormValues({'billing_id':response.data.project._id})
      nextFormStep();
    })
    .catch((error) => {
      console.log(error);
    });
    
  },[reqBody])
  // handle clean data after success
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return; // 👈️ return early if initial render
  //   }
  //   reset({
  //     domain_name: "",
  //     domain_type: "",
  //     packet_type: "",
  //     source_code_url: "",
  //     ssl_type: "",
  //     status_id: "",
  //     title: ""
  //   })
  // }, [statusAddData])
  
  const onSubmit = (values) => {
    setFormValues(values);
    setReqBody(data)
    

    // console.log(data)

    
  //   var data = JSON.stringify({
  //     "title": `${values.title}`,
  //     "source_code_url": `${values.title}`,
  //     "domain_type": `${values.domain_type}`,
  //     "domain_name": `${values.domain_name}`,
  //     "packet_type": `${values.packet_type}`,
  //     "ssl_type": `${values.ssl_type}`,
  //     "status_id": `${values.status_id}`
  //   });
  //   var config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: `${process.env.REACT_APP_BACKEND_URL}/project/add`,
  //     headers: { 
  //       'Content-Type': 'application/json'
  //     },
  //     data : data
  // };
  
  // axios.request(config)
  //     .then(function (response) {
  //         // loadingRef.current.classList.add('hidden')
  //         // addNotification({
  //         //     title: 'Success',
  //         //     subtitle: 'Upload Success',
  //         //     theme: 'darkgreen',
  //         //     native: false // when using native, your OS will handle theming.
  //         // })
  //         console.log(JSON.stringify(response.data));
          
  //         // setContentData({
  //         //     ...contentData,
  //         //     artWorkFile: response.data.url
  //         // })
  //         // console.log(contentData.artWorkFile)
  //         nextFormStep();

  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //         // loadingRef.current.classList.add('hidden')
  //         // addNotification({
  //         //     title: 'Error',
  //         //     subtitle: "Submit Content Error",
  //         //     message: 'Connection error',
  //         //     theme: 'red',
  //         //     native: false // when using native, your OS will handle theming.
  //         // });
  //         // loadingRef.current.classList.add('hidden')
  //     });
    
  };

  return (
    <div className={formStep === 2 ? "block": "hidden"}>
      <h2>Confirm Purchase</h2>
      <div className="my-2 flex items-center justify-between p-1 rounded-md bg-[#5e0370]">
        <div>
          <p className="text-xl font-bold">Project Information</p>
          <p>Project title : {data.title}</p>
          <p>Repository URL : {data.source_code_url}</p>
          {/* <p>Description : {data.description}</p> */}
          <p>Packet : {data.packet_type}</p>
        </div>
        <div>
          <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md" >
              <div>
                  <p>Edit</p>
              </div>
          </button>
        </div>
      </div>
      <div className="my-2 flex items-center justify-between p-1 rounded-md bg-[#5e0370]">
        <div>
          <p className="text-xl font-bold">Domain And SSL</p>
          <p>SSL Type : {data.ssl_type}</p>
          <p>Domain name : {data.domain_name}</p>
        </div>
        <div>
          <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md" >
              <div>
                  <p>Edit</p>
              </div>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* <p>Ensure your data entered correctly</p> */}
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              value="1"
              {...register("status_id", { required: true })}
            />
            Data is correct?
          </label>
          {errors.checkbox && (
            <p className="text-red-500">Confirm purchase to proceed</p>
          )}
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

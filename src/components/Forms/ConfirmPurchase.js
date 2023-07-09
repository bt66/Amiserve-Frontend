
import { useEffect, useState, useRef } from "react";
import { set, useForm } from "react-hook-form";
import { useFormData } from "../../context";
import AlertNotification from "../AlertNotification";
import axios from "axios";

export default function ConfirmPurchase({ formStep, nextFormStep, prevFormStep, resetFormStep,fetchedState, getFetchState }) {
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

  const [openAlert, setOpenalert] = useState({
    open: false,
    message: "",
    mode: "success"
  });

  // handle add data 
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if initial render
    }
    data.owner_id = localStorage.getItem("userId")
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
    fetchedState(true)
    axios.request(config)
    .then((response) => {
      setOpenalert({
        open: true,
        message: "Add data success",
        mode: "success"
      })
      console.log(JSON.stringify(response.data.project));
      // setStatusAddData(true)
      setFormValues({'billing_id':response.data.project._id})
      fetchedState(false)
      nextFormStep();
    })
    .catch((error) => {
      setOpenalert({
        open: true,
        message: "Add data failed",
        mode: "error"
      })
      console.log(error);
    });
    
  },[reqBody])
  
  const onSubmit = (values) => {
    setFormValues(values);
    setReqBody(data)
    
  };

  return (
    <div className={`${formStep === 2 ? "block": "hidden"}`}>
      <AlertNotification open={openAlert.open} setOpen={setOpenalert} mode={openAlert.mode}>
            <p>{openAlert.message}</p>
        </AlertNotification>
      <h2>Confirm Purchase</h2>
      <div className="my-2 flex items-center justify-between p-1 rounded-md bg-[#5e0370]">
        <div>
          <p className="text-xl font-bold">Project Information</p>
          <p>Project title : {data.title}</p>
          <p>Repository URL : {data.source_code_url}</p>
          {/* <p>Description : {data.description}</p> */}
          <p>Packet : {data.packet_type}</p>
        </div>
        {/* <div>
          <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md" >
              <div >
                  <p>Edit</p>
              </div>
          </button>
        </div> */}
      </div>
      <div className="my-2 flex items-center justify-between p-1 rounded-md bg-[#5e0370]">
        <div>
          <p className="text-xl font-bold">Domain And SSL</p>
          <p>SSL Type : {data.ssl_type === "1" ? "Amiserv" : "Self"}</p>
          <p>Domain name : {data.domain_name}</p>
        </div>
        {/* <div>
          <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md" >
              <div >
                  <p>Edit</p>
              </div>
          </button>
        </div> */}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* <p>Ensure your data entered correctly</p> */}
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              value="0"
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

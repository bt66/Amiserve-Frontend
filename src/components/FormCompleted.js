import { useState, useEffect } from "react";
import { useFormData } from "../context";
import axios from "axios";

export default function FormCompleted() {
  const { data } = useFormData();
  const[dataBilling, setdataBilling] = useState([]);
  const [fetched, setFeched] = useState(false);

  useEffect(() => {
    var config = {
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/project/${data.billing_id}`,
    };
    axios(config)
    .then(response => 
        {
            setdataBilling(response.data.project)
            // setFeched(true)
            console.log("ini data")
            console.log(dataBilling)
            
        })
    .catch(function (error) {
        console.log(error)
        // if unauthorized redirect to login
        // if(error.response.status == 401){
        //     navigate("/login");
        // }
    })
  }, [fetched])
  
  return (
    <>
    {dataBilling.length === 0 ? 
      <p>no data</p>
    :
      <div>
        <h2>Thank you for your purchase! 🎉</h2>
        <p>Your order :</p>
        <p>Project Title : {dataBilling.title}</p>
        <p>Repository url : {dataBilling.source_code_url}</p>
        <p>domain : {dataBilling.domain.domain_name}</p>
        <p>domain type: {dataBilling.domain.domain_type}</p>
        <p>Packet : {dataBilling.packet.packet_name}</p>
        <p>SSL type : {dataBilling.ssl.ssl_type}</p>
        <p>Total Price: {dataBilling.packet.packet_price}</p>
      </div>
    }
    </>
  );
}

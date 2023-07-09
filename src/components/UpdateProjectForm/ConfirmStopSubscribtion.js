
import React from 'react'
import CloseIcon from '../../assets/close.svg'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function ConfirmStopSubscribtion(props) {
  const navigate = useNavigate();
  const handleDeteleData = () => {
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/project/${props.data._id}`
      // headers: { 
      //   'Content-Type': 'application/json', 
      //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NGU5NTA4YTZlODkyNDYyMzBjNTRkIiwiZW1haWwiOiJ0ZXN0MTIzQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwidXNlcm5hbWUiOiJ0ZXN0MjMiLCJub21vciI6IjA5ODg4MjkyOCJ9LCJpYXQiOjE2ODc2MzExNTV9.dPl-OWwmZtFuxsLISW1tVarYF2vTH-RxWt9Q9yiNQD8'
      // },
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      navigate('/user/overview');

    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='p-2 absolute z-20 w-screen h-screen bg-black bg-opacity-60'>
      <div className='flex justify-center items-center'>
        <div className='bg-[#9F49F5] p-1 rounded-xl w-11/12 max-w-md h-fit'>
          <div className='bg-[#3B2164] rounded-xl'>
                {/* content container */}
                <div className='p-3'>
                  <div className='flex justify-between'>
                    <div>
                            
                      <p className='text-2xl lg:text-3xl font-bold'>Confirm</p>
                    </div>
                    <div onClick={props.handleOpenModal}>
                        <img src={CloseIcon} alt='close Icon'></img>
                    </div>
                  </div>
                  <div>
                    <p>Are you sure, you want to delete project <span className='text-red-500'>{props.data.title}</span> ?</p>
                  </div>
                  <div className='flex justify-between mt-6'>
                    <button className='bg-blue-500 px-4 py-2 rounded-md' onClick={props.handleOpenModal}>Cancle</button>
                    <button className='bg-red-500 px-4 py-2 rounded-md' onClick={handleDeteleData}>Confirm</button>
                  </div>
                <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmStopSubscribtion


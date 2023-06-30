import React from 'react'
import AdminModal from '../AdminModal'
import axios from 'axios';
import { Button } from '@mui/material';

function ConfirmDeleteModal(props) {

  const handleDeletePacket = () => {
    let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_BACKEND_URL}/packet/${props.data.id}`,
    headers: { 
        'Content-Type': 'application/json'
    }
    };
    props.notifyChangeVar(true)
    axios.request(config)
    .then((response) => {
        props.notifyChangeVar(false)
        props.handleCloseModal()
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        props.notifyChangeVar(false)
        props.handleCloseModal()
        console.log(error);
    });
  };
  return (
    <AdminModal openModalUpdate={props.openModalAdd} handleCloseModalUpdate={props.handleCloseModal}>
        <h2 id="parent-modal-title">Delte Packet</h2>
        <p>Are you sure to delete <span className='text-red-500'>{props.data.name}</span> with id <span className='text-red-500'>{props.data.id}</span></p>
        <Button onClick={props.handleCloseModal}>Cancle</Button>
        <Button onClick={handleDeletePacket}>Delete</Button>
    </AdminModal>
  )
}

export default ConfirmDeleteModal
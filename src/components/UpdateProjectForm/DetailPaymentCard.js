import React, { useState, useEffect,useRef } from 'react';
import CloseIcon from '../../assets/close.svg';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import Loading from '../Loading';

// receive handleOpenModal, project data
function DetailPaymentCard(props) {
	const loadingRef = useRef();
	const [domainMode, setDomainMode] = useState("false")

	const {
			handleSubmit,
			formState: { errors },
			register,
	} = useForm({ 
		mode: "all",
		defaultValues: {
			title: props.data.title,
			source_code_url: props.data.source_code_url,
			domain_name: props.data.domain.domain_name,
			ssl_type: props.data.ssl.ssl_type === "amiserv" ? "1" : "2"
		}
	});
	// console.log(props.data)
	const onSubmit = (values) => {
			console.log(values)
			let data = JSON.stringify({
				"title": values.title,
				"source_code_url": values.source_code_url,
				"domain_type": props.data.domain.domain_type,
				"domain_name": values.domain_name,
				"packet_type": props.data.packet.packet_type,
				"ssl_type": values.ssl_type,
				"description": values.description
			});
			
			let config = {
				method: 'put',
				maxBodyLength: Infinity,
				url: `${process.env.REACT_APP_BACKEND_URL}/project/edit/${props.data._id}`,
				headers: { 
					'Content-Type': 'application/json'
				},
				data : data
			};
			
			loadingRef.current.classList.remove('hidden')
			axios.request(config)
			.then((response) => {
				loadingRef.current.classList.add('hidden')
				console.log(JSON.stringify(response.data));
				props.handleOpenModal();
			})
			.catch((error) => {
				loadingRef.current.classList.add('hidden')
				console.log(error);
			});
			
	};
	
	return (
		<div className='p-2 absolute z-20 w-screen h-screen bg-black bg-opacity-60'>
			<div className='flex justify-center'>

				<div className='bg-[#9F49F5] p-1 rounded-xl w-11/12 max-w-4xl h-fit'>
					<div className='bg-[#3B2164] rounded-xl'>
							{/* content container */}
							<div className='p-3'>
									<div className='flex justify-between items-center'>
											<div>
													
													<p className='text-2xl lg:text-3xl font-bold'>Detail Payment</p>
											</div>
											<div onClick={props.handleOpenModal}>
													<img src={CloseIcon} alt='close Icon'></img>
											</div>
									</div>
									{/* content */}
									<div>
										<p>Packet : {props.data.packet.packet_name}</p>
										<p>Payment Status : {props.data.transaction.transaction_status}</p>
										<p className='text-xl font-bold'>Total : {props.data.packet.packet_price}</p>
									</div>
									<div className='mt-3'>
										<p className='text-xl font-bold'>How to pay?</p>
										<p>Please transfer to the following bank : </p>
										<p>BCA : 90830-234234</p>
										<p>BRI : 90830-234234</p>
										<p>Mandiri : 90830-234234</p>
										<p>And confirm payment with the following link : </p>
										<div className='flex item-center justify-center'>
											<a target="_blank" href={`https://wa.me/+6285158447601/?text=Amiserv%20payment%20confirmation%20for%20${props.data._id}`}>
												<div className='bg-[#3C47A3] hover:bg-[#252e7a] px-4 py-2 rounded-md w-60'>
													<p className='text-center'>Confirm Payment</p>
												</div>
											</a>
										</div>
										<p>note : Dont forget to attach transfer invoice</p>
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

export default DetailPaymentCard
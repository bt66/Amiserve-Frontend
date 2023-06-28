import React, { useState, useEffect,useRef } from 'react';
import CloseIcon from '../../assets/close.svg';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import Loading from '../Loading';

// receive handleOpenModal, project data
function UpdateProjectCard(props) {
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
				url: `https://api.amiserv.cloud/project/edit/${props.data._id}`,
				headers: { 
					'Content-Type': 'application/json'
				},
				data : data
			};
			
			loadingRef.current.classList.remove('hidden')
			props.setFetchState(true)
			axios.request(config)
			.then((response) => {
				props.setFetchState(false)
				loadingRef.current.classList.add('hidden')
				console.log(JSON.stringify(response.data));
				props.handleOpenModal();
			})
			.catch((error) => {
				props.setFetchState(false)
				loadingRef.current.classList.add('hidden')
				console.log(error);
			});
			
	};
	
	return (
		<div className='p-2 absolute z-20 w-screen h-screen bg-black bg-opacity-60'>
			<div ref={loadingRef} className="hidden">
					<Loading/>
			</div>
			<div className='flex justify-center'>

				<div className='bg-[#9F49F5] p-1 rounded-xl w-11/12 max-w-4xl h-fit'>
					<div className='bg-[#3B2164] rounded-xl'>
							{/* content container */}
							<div className=''>
									<div className='flex justify-between items-center'>
											<div>
													
													<p className='text-2xl lg:text-3xl font-bold'>Update Source Code</p>
											</div>
											<div onClick={props.handleOpenModal}>
													<img src={CloseIcon} alt='close Icon'></img>
											</div>
									</div>
									{/* content */}
									<div className='p-3'>
										<p className='text-xl mt-3 lg:text-2xl'>Request update source code</p>
										<p className='text-sm mt-2 lg:text-xl'>If you need to request update without different data on existing project, just click Request Update button</p>
									</div>
									
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className='mt-1 flex flex-col p-2'>
											<label htmlFor='projectTitle' className='w-full lg:text-xl mt-3'><b><span className="text-red-500">*</span>Project Title :</b></label>
											<div className='relative'>
												<input 
												type="text"
												id='projectTitle'
												name="projectTitle" 
												placeholder='Project Title' 
												{...register("title", {
														required: "projectTitle is required",
												})}
												className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'/>
												<p className='text-red-400'>{errors.projectTitle && errors.projectTitle.message}</p>
											</div>
										</div>
										<div className='flex flex-col p-2'>
											<label htmlFor='repositoryUrl' className='w-full lg:text-xl'><b><span className="text-red-500">*</span>Project URL :</b></label>
											<div className='relative'>
												<input 
													type="text"
													id='repositoryUrl'
													name="repositoryUrl" 
													placeholder='Repository URL' 
													{...register("source_code_url", {
															required: "repositoryUrl is required",
													})}
													className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'/>
												<p className='text-red-400'>{errors.repositoryUrl && errors.repositoryUrl.message}</p>
											</div>
										</div>
										<div className='mt-1 flex flex-col p-2'>
											{/* domain section */}
											<div>
											<label htmlFor='repositoryUrl' className='w-full lg:text-xl'><b><span className="text-red-500">*</span>Domain name :</b></label>
												<input
													type="text"
													id='domain_name'
													name="domain_name" 
													placeholder={domainMode ==="true" ? "fpsatu.amiserv.cloud" : "example.com"}
													{...register("domain_name", {
															required: "Domain name is required",
													})}
													className={'bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'}/>
												<p className='text-red-400'>{errors.domain_name && errors.domain_name.message}</p>
												{/* ssl certificate section */}
												<p>SSL certificate : </p>
												<div className=''>
													<input 
														type="radio"
														id='ssl-type1'
														name="ssl-type1" 
														placeholder='Project Title'
														value="1"
														{...register("ssl_type", {
																required: "ssl-type is required",
														})}
														// checked={props.data.ssl.ssl_type === "amiserv" ? true : false}
														// {...props.data.ssl.ssl_type ? checked : ""}
														className=''/>
														<label htmlFor="ssl-type1" className='w-full lg:text-xl mt-3'>Amiserv</label>
													<br/>
													<input 
														type="radio"
														id='ssl-type2'
														name="ssl-type2" 
														placeholder='Project Title' 
														value="2"
														{...register("ssl_type", {
																required: "ssl-type is required",
														})}
														className=''/>
														<label htmlFor="ssl-type2" className='w-full lg:text-xl mt-3'>Self</label>
												</div>
												{/* description */}
												<div className="">
													<label htmlFor='Description' className='w-full lg:text-xl mt-3'><b>Description : </b></label>
													<textarea
														id='Description'
														name="Description" 
														placeholder='Project description (Optional)'
														className='bg-[#5D2E80] border-[#789AF2] rounded-xl lg:px-[1rem] px-1 py-2  w-full border-2 lg:py-4'
														{...register("description", {})} />
												</div>
											</div>
											<br/>
										</div>
										
										

										<div className="flex justify-end p-3">
											<button type='submit' className='bg-[#3C47A3] px-3 py-3 rounded-md m-2'>Request Update</button>	
										</div>
									</form>
								<div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UpdateProjectCard
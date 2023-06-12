import React from 'react'
import AddProjectForm from './AddProjectForm'
import CloseIcon from '../../assets/close.svg'
function AddProject() {
  return (
    <div className='p-2 absolute z-20 w-full h-screen bg-black bg-opacity-60'>
        <div className='bg-[#9F49F5] p-1 rounded-xl'>
            <div className='bg-[#3B2164] rounded-xl'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-3xl'>Add Project</p>
                    </div>
                    <div>
                        <img src={CloseIcon} alt='close Icon'></img>
                    </div>
                </div>
                {/* content */}
                <div>
                    <AddProjectForm></AddProjectForm>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProject
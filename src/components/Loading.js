import React from 'react'
import ReactLoading from "react-loading";

function Loading() {
    return (
        <div className='flex absolute z-30 w-screen h-screen items-center justify-center bg-black bg-opacity-60'>
            <ReactLoading type="spin" color="#9F49F5" height={100} width={100} />
        </div>
    )
}

export default Loading
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    let navigate = useNavigate()
    return (
        <div className='error-wrapper'>
            Error 404 found
            <div>something went wrong!..........</div>
            <button onClick={()=>{navigate("/")}}>Go to home page</button>

        </div>
    )
}

export default Error

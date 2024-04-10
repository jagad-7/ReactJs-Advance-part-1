import React from 'react'
import {useNavigate} from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
  return (
    <div>
        <h2>404 Page Not Found!</h2>
        <button onClick={()=>navigate('/')}>Back To Home</button>
    </div>
  )
}

export default NotFound
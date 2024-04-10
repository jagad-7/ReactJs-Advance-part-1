import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function Home() {
  const navigate = useNavigate()
  const navigateToPage = () =>{
    navigate('/Success')
  }

  return (
    <div>
        <h1>Home</h1>
        <button onClick={navigateToPage}>Submit</button>
    </div>
  )
}

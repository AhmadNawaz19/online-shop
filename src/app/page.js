'use client'
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {

  const [user, setUser] = useState({
    username : '',
    age : ''
  })

  const setValue = (e) => {
    setUser(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  const checkValue = async () => {
    console.log(user)
    const response = await axios.post('http://localhost:8000/user', user);
    console.log(response.data)
  }


  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' name='username' placeholder='username' onChange={setValue}></input>
        <input type='number' name='age' placeholder='age' onChange={setValue}></input>
        <button type='submite' onClick={() => checkValue()}>Login</button>
      </form>
    </div>
  )
}

export default page

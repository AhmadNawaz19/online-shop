'use client'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

const page = () => {

  const {data:session} = useSession();

  useEffect(() => {
    console.log(session)
  },[session])

  if(session){
    return <button onClick={() => signOut()}>logout</button>
  }

  return (
    <div>
      <h1>hello</h1>
      <button onClick={() => signIn('google', { callbackUrl: '/' })}>login WITH google</button>
      <button onClick={() => signIn('github', { callbackUrl: '/' })}>login WITH github</button>

    </div>
  )
}

export default page

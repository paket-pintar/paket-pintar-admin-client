import React from 'react'
import {  } from 'react-router-dom'

export default function Login() {
  return(
    <div className="main-container p-20 flex justify-center">
    <div className="flex flex-col w-1/2 border p-10 rounded shadow-md">
      <div>
        <h1 className="bg-green-100 p-20 text-center">Paket Pintar Image</h1>
      </div>

      <div>
        <h1 className="text-center text-header p-10">Admin Login</h1>
      </div>

      <div className="w-full">
        <form className="flex flex-col">
          <input className="form-input" type="text" placeholder="Enter your Email Address" />
          <input className="form-input" type="text" placeholder="Enter your Password" />
          <input className="btn mt-5 py-3 rounded" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
  )
}
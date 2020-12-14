import React, { useState, useEffect } from "react"
import axios from "axios"
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { setLoginErr } from "../store/actions/actions"
import { userLogin } from "../helpers/serverInteraction"
import {} from "react-router-dom"

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { loginSuccess } = useSelector((state) => state.user)
  const { loginErrMsg } = useSelector((state) => state.error)
  const [userInput, setUserInput] = useState({ email: "", password: "" })

  useEffect(() => {
  }, [])

  function handleInputChange(e) {
    let key = e.target.name
    let value = e.target.value
    dispatch(setLoginErr(false))
    setUserInput({ ...userInput, [key]: value })
  }

  function handleLogin(e) {
    e.preventDefault()
    console.log(userInput)
    dispatch(userLogin(userInput))

    if( loginSuccess ){
        history.push('/')
      }
  }

  return (
    <div className="main-container p-20 flex justify-center">
      <div className="flex flex-col w-1/2 border p-10 rounded shadow-md">
        <div>
          <h1 className="bg-green-100 p-20 text-center">Paket Pintar Image</h1>
        </div>

        <div>
          <h1 className="text-center text-header p-10">Admin Login</h1>
        </div>
        <div className="w-full">
          <form onSubmit={handleLogin} className="flex flex-col">
            <input
              className="form-input"
              onChange={handleInputChange}
              name="email"
              type="email"
              placeholder="Enter your Email Address"
            />
            <input
              className="form-input"
              onChange={handleInputChange}
              name="password"
              type="password"
              placeholder="Enter your Password"
            />

            {loginErrMsg ? <p className="error-text">{loginErrMsg}</p> : ""}
            <input
              className="btn mt-5 py-3 rounded"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

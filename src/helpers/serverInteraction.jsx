import axios from "axios"
import {
  setLoginErr,
  setLoginSuccess,
  setPackageLoading,
  setPackages,
  setUsers,
} from "../store/actions/actions"
import { baseURL } from '../config/config'

export function userLogin(payload) {
  return (dispatch) => {
    console.log("user login called")

    const { email, password } = payload

    axios({
      baseURL,
      url: "/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then(({ data }) => {
        dispatch(setLoginSuccess(true))
        dispatch(setLoginErr(""))
        const { access_token } = data
        localStorage.setItem("access_token", access_token)
      })
      .catch(({ response }) => {
        dispatch(setLoginErr(response.data.msg))
      })
  }
}

export function fetchPackages() {
  return (dispatch) => {
    dispatch(setPackageLoading(true))
    const access_token = localStorage.getItem("access_token")
    axios({
      baseURL,
      url: "/packages",
      method: "get",
      headers: {
        access_token,
      },
    })
      .then(({ data }) => {
        dispatch(setPackages(data))
      })
      .catch(({ response }) => {
        console.log(response)
      })
      .finally(() => {
        setPackageLoading(false)
      })
  }
}

export function createPackage(payload) {
  console.log('create package called')
  const access_token = localStorage.getItem("access_token")
  return axios({
    baseURL,
    url: "/packages",
    method: "POST",
    headers: {
      access_token
    },
    data: {
      sender: payload.sender,
      description: payload.description,
      UserId: payload.userId
    }
  })
}

export function claimPackage() {
  const access_token = localStorage.getItem("access_token")
  return axios({
    baseURL,
    url: "/packages",
    method: "PATCH",
    headers: {
      access_token
    }
  })
}

export function fetchUsers() {
  return (dispatch) => {
    const access_token = localStorage.getItem('access_token')
    axios({
      baseURL,
      url: '/users',
      method: 'get',
      headers: {
        access_token
      }
    })
      .then(({ data }) => {
        dispatch(setUsers(data))
      })
      .catch(({ response }) => {
        console.log(response)
      })
  }
}

export async function sendNotification(payload) {
  const access_token = localStorage.getItem('access_token')
  // console.log(access_token, 'access_token');
  axios({
    baseURL,
    url: "users/send-notification",
    method: "POST",
    data: payload,
    headers: { access_token }
  })
    .then(({ data }) => {
      console.log(data, "<< data notif")
    })
    .catch(({ response }) => {
      console.log(response);
    })
}

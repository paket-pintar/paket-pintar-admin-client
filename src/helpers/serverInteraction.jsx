import axios from "axios"
import {
  setLoginErr,
  setLoginSuccess,
  setPackageLoading,
  setPackages,
} from "../store/actions/actions"
import {baseURL} from '../config/config'

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

// export function fetchUsers() {
//   return (dispatch) => {
//     const access_token = localStorage.getItem('access_token')
//     axios({
//       baseURL,
//       url:'/packages',
//       method: 'get',
//       headers: {
//         access_token
//       }
//     })
//     .then(({ data }) => {
//       console.log(data)
//     })
//     .catch(({ response }) => {
//       console.log(response)
//     })
//   }
// }

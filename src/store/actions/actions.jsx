export function setLoginErr(message = "") {
  return {
    type: "SET_LOGIN_ERR",
    payload: message,
  }
}

export function setUsers(value) {
  console.log(value, '<<< value di set user')
  return {
    type: 'SET_USERS',
    payload: value
  }
}

export function setPackages(value) {
  console.log(value, '<<< isi set packages')
  return {
    type: 'SET_PACKAGES',
    payload: value
  }
}

export function setUserLoading(value) {
  return {
    type: 'SET_USER_LOADING',
    payload: value
  }
}

export function setPackageLoading(value) {
  return {
    type: 'SET_PACKAGE_LOADING',
    payload: value
  }
}

export function setLoginSuccess(loginState) {
  return {
    type: "SET_LOGIN_SUCCESS",
    payload: loginState,
  }
}

export function setSubmitSuccess(value) {
  return {
    type: "SUBMIT_SUCCESS",
    payload: value,
  }
}

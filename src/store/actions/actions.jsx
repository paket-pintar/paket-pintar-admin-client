export function setLoginErr(message = "") {
  return {
    type: "SET_LOGIN_ERR",
    payload: message,
  }
}

export function setUsers(value) {
  return {
    type: 'SET_USERS',
    payload: value
  }
}

export function setPackages(value) {
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

export function loginSuccess(loginState) {
  return {
    type: "SET_LOGIN_SUCCESS",
    payload: loginState,
  }
}

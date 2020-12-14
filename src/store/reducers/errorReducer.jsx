const initState = {
  loginErr: false,
  loginErrMsg: "",
}

export default function errorReducer(state = initState, action) {
  switch (action.type) {
    case "SET_LOGIN_ERR":
      return {
        ...state,
        loginErrMsg: action.payload || '',
      }

    default:
      return state
  }
}

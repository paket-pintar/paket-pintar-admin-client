const initState = {
  users: [],
  loginSuccess: false,
  loading: false,
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case "SET_USERS":
      console.log(action.payload, '<<< isi action payload set user di reducer')
      return { ...state, users: action.payload }
    
    case 'SET_LOGIN_SUCCESS' : 
      return { ...state, loginSuccess: action.payload}

    case 'SET_USER_LOADING' :
      return { ...state, loading: action.payload}
    default:
      return state
  }
}

const initState = {
  packages: [],
  loading: false,
  submitSuccess: false
}

export default function packageReducer(state = initState, action) {
  switch (action.type) {
    case "SET_PACKAGES":
      return { ...state, packages: action.payload }

    case "ADD_PACKAGES":
      //console.log()
      return { ...state, packages: [...state.packages, action.payload] }

    case 'SET_PACKAGE_LOADING' :
      return { ...state, loading: action.payload}

    case 'SUBMIT_SUCCESS' :
      return { ...state, submitSuccess: action.payload}

    default:
      return state
  }
}

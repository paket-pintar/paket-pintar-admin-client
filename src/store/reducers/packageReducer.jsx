const initState = {
  packages: [],
  loading: false,
}

export default function packageReducer(state = initState, action) {
  switch (action.type) {
    case "SET_PACKAGES":
      return { ...state, packages: action.payload }

    case "ADD_PACKAGES":
      return { ...state, packages: [...state.packages, action.payload] }

    case 'SET_PACKAGE_LOADING' :
      return { ...state, loading: action.payload}

    default:
      return state
  }
}

const thunkWrapper = () => {
  return ({ dispatch }) => next => action => {
    console.log (typeof action, '<< type of action')
    if(typeof action === 'function') {
      console.log('thunk called')
      return action(dispatch)
    }
    return next(action)
  } 
}

export const thunk = thunkWrapper()
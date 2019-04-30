const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  } else if (action.type === 'DEC_COUNTER') {
    return {
      ...state,
      counter: state.counter - 1
    }
  } else if (action.type === 'ADD_TEN_COUNTER') {
    return {
      ...state,
      counter: state.counter + 10
    }
  } else if (action.type === 'SUB_TEN_COUNTER') {
    return {
      ...state,
      counter: state.counter - 10
    }
  }
  return state
}

export default reducer

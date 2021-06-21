import { DEC_PAGE, INC_PAGE, SET_PAGE } from '../actions/actionTypes'

const initialState = 0

const filterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PAGE:
      const { newPage } = action.payload

      return newPage

    case INC_PAGE:
      return state + 1

    case DEC_PAGE:
      return state - 1

    default:
      return state
  }
}

export default filterReducer

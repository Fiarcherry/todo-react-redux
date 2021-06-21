import { SET_QUERY } from '../actions/actionTypes'

const initialState = ''

const queryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_QUERY:
      const { newQuery } = action.payload

      return newQuery

    default:
      return state
  }
}

export default queryReducer

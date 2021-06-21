import { getFilter } from '../../handlers/filterHandler'
import { SET_FILTER } from '../actions/actionTypes'

const initialState = getFilter()

const filterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FILTER:
      const { newFilter } = action.payload

      return newFilter

    default:
      return state
  }
}

export default filterReducer

import { getTheme } from '../../handlers/themeHandler'
import { SET_THEME } from '../actions/actionTypes'

const initialState = getTheme()

const themeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_THEME:
      const { newTheme } = action.payload
      return newTheme

    default:
      return state
  }
}

export default themeReducer

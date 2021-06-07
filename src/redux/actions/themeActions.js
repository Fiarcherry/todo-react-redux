import { SET_THEME } from './actionTypes'

export const actionSetTheme = (newTheme) => {
  return {
    type: SET_THEME,
    payload: { newTheme },
  }
}

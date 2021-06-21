import { SET_QUERY } from './actionTypes'

export const actionSetQuery = (newQuery) => {
  return {
    type: SET_QUERY,
    payload: { newQuery },
  }
}

import { SET_FILTER } from './actionTypes'

export const actionSetFilter = (newFilter) => {
  return {
    type: SET_FILTER,
    payload: { newFilter },
  }
}

import { DEC_PAGE, INC_PAGE, SET_PAGE } from './actionTypes'

export const actionSetPage = (newPage) => {
  return {
    type: SET_PAGE,
    payload: { newPage },
  }
}

export const actionIncPage = () => {
  return {
    type: INC_PAGE,
  }
}

export const actionDecPage = () => {
  return {
    type: DEC_PAGE,
  }
}

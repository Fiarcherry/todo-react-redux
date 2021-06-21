import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_DONE_TODO,
  TOGGLE_IMPORTANT_TODO,
} from './actionTypes'

export const actionAddTodo = (id, label) => {
  return {
    type: ADD_TODO,
    payload: { id, label },
  }
}

export const actionToggleImportantTodo = (id) => {
  return {
    type: TOGGLE_IMPORTANT_TODO,
    payload: { id },
  }
}

export const actionToggleDoneTodo = (id) => {
  return {
    type: TOGGLE_DONE_TODO,
    payload: { id },
  }
}

export const actionDeleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  }
}

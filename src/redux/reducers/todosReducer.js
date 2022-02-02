import { getTodos } from '../../handlers/todoHandler'
import {
  ADD_TODO,
  CLEAR_TODOS,
  DELETE_TODO,
  TOGGLE_DONE_TODO,
  TOGGLE_IMPORTANT_TODO,
} from '../actions/actionTypes'

const initialState = getTodos()

const todosReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, label } = action.payload

      return [
        ...state,
        {
          id,
          label,
          important: false,
          done: false,
        },
      ]
    }
    case TOGGLE_IMPORTANT_TODO: {
      const { id } = action.payload

      return state.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    }
    case TOGGLE_DONE_TODO: {
      const { id } = action.payload

      return state.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    }
    case DELETE_TODO: {
      const { id } = action.payload

      const index = state.findIndex((item) => item.id === id)

      if (index !== -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)]
      }
      return state
    }
    case CLEAR_TODOS: {
      return state.filter(() => 0 === 1)
    }
    default:
      return state
  }
}

export default todosReducer

import { getTodos } from '../../handlers/todoHandler'
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_DONE_TODO,
  TOGGLE_IMPORTANT_TODO,
} from '../actions/actionTypes'

const initialState = getTodos()

const todosReducer = (state = initialState, action) => {
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
        todo.id === id ? { ...todo, important: !todo.important } : { ...todo }
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

      return state.filter((todo) => todo.id !== id)

      // const index = state.findIndex((item) => item.id === id)

      // console.log(index)

      // if (index !== -1) {
      //   return [...state.slice(0, id), ...state.slice(id + 1)]
      // }

      // console.log('something wrong with todo delete')
      // return state
    }
    default:
      return state
  }
}

export default todosReducer

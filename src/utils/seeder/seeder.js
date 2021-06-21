import { addTodo, clearTodos } from '../../handlers/todoHandler'
import {
  actionAddTodo,
  actionClearTodo,
} from '../../redux/actions/todosActions'
import dbTodosLabels from './dbTodosLabels'

//up to 180
const count = 91
const defaultValue = 'Task to do'

const seeder = ({ dispatch }) => {
  dispatch(actionClearTodo())
  clearTodos()

  for (let i = 0; i < count; i++) {
    dispatch(actionAddTodo(i, dbTodosLabels[i] || defaultValue))
    addTodo(dbTodosLabels[i])
  }
}

export default seeder

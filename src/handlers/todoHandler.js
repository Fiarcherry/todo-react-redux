import Storage from '../utils/storage'

const key = 'todos'
const importantProperty = 'important'
const doneProperty = 'done'
const defaultValue = []

export const getTodos = () => {
  return tryParseJSON(Storage.get(key))
}

const setTodo = (data) => {
  Storage.set(key, JSON.stringify(data))
}

export const getTodo = (id) => {
  const data = getTodos()

  const item = data.find((item) => item.id === id)

  if (item) {
    return item
  }
}

export const addTodo = (text) => {
  const data = getTodos()

  const maxId = findMaxId(data)
  const newItem = createTodoItem(maxId, text)

  setTodo([...data, newItem])
}

export const onTodoToggleImportant = (id) => {
  toggleProperty(id, importantProperty)
}

export const onTodoToggleDone = (id) => {
  toggleProperty(id, doneProperty)
}

export const deleteTodo = (id) => {
  const data = getTodos()

  const index = data.findIndex((item) => item.id === id)

  if (index !== -1) {
    const newData = [...data.slice(0, index), ...data.slice(index + 1)]

    setTodo(newData)
  }
}

const toggleProperty = (id, propertyName) => {
  const data = getTodos()

  const index = data.findIndex((item) => item.id === id)

  if (index !== -1) {
    const oldItem = data[index]
    const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName] }
    const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    setTodo(newData)
  }
}

const tryParseJSON = (string) => {
  try {
    var result = JSON.parse(string)

    if (result && typeof result === 'object') {
      return result
    }
  } catch (e) {}

  setTodo(defaultValue)

  return defaultValue
}

const findMaxId = (arrayOfObjects) => {
  return arrayOfObjects
    .map((item) => item.id)
    .reduce((previous, current) => {
      return current > previous ? current : previous
    }, 0)
}

const createTodoItem = (id, label) => {
  let newId = id + 1
  return {
    id: newId,
    label,
    important: false,
    done: false,
  }
}

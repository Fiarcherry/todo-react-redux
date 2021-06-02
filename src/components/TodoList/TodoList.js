import React, { useEffect, useState } from 'react'

import TodoListItem from '../TodoListItem'
import Container from '../common/Container'
import List from '../common/List'
import ListElement from '../common/ListElement'

import {
  deleteTodo,
  getTodos,
  onTodoToggleDone,
  onTodoToggleImportant,
} from '../../handlers/todoHandler'

const TodoList = ({ todos, filterData, query, onTodosChange }) => {
  const [todoData, setTodoData] = useState(getTodos())

  const handleTodosChange = () => {
    setTodoData(getTodos())
  }

  const handleOnDeleted = (id) => {
    deleteTodo(id)
    handleTodosChange()
  }

  const handleToggleImportant = (id) => {
    onTodoToggleImportant(id)
    handleTodosChange()
  }

  const handleToggleDone = (id) => {
    onTodoToggleDone(id)
    handleTodosChange()
  }

  useEffect(() => {
    console.log('useTodo')

    const handleChange = (e) => {
      console.log('channel useTodo', e.data)
      onTodosChange()
    }

    onTodosChange()

    const channel = new BroadcastChannel('todo')
    channel.postMessage('test')

    channel.addEventListener('message', (e) => handleChange(e))

    return () => {
      channel.removeEventListener('message', handleChange)
      channel.close()
    }
  }, [todoData, onTodosChange])

  const calcSortOrder = (valueDone, valueImportant) => {
    const binary = `${Number(valueDone)}${Number(!valueImportant)}`

    return parseInt(binary, 2)
  }

  const sort = (items) => {
    items.sort((a, b) => {
      const aValue = calcSortOrder(a.done, a.important)
      const bValue = calcSortOrder(b.done, b.important)

      if (aValue === bValue) {
        return a.label > b.label ? 1 : a.label < b.label ? -1 : 0
      } else {
        return aValue > bValue ? 1 : -1
      }
    })
    return items
  }

  const search = (items, query) => {
    if (query.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
  }

  const filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }

  const visibleItems = sort(search(filter(todos, filterData), query))

  const elements = visibleItems.map((item, index) => {
    const { id, ...itemProps } = item
    const last = visibleItems.length - 1 === index

    return (
      <ListElement key={id} last={last}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => handleOnDeleted(id)}
          onToggleImportant={() => handleToggleImportant(id)}
          onToggleDone={() => handleToggleDone(id)}
        />
      </ListElement>
    )
  })

  return (
    <Container justifyContent="center">
      <List>{elements}</List>
    </Container>
  )
}

export default TodoList

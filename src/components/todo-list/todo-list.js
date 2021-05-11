import React from 'react'

import TodoListItem from '../todo-list-item'
import { List } from './styles'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item

    return (
      <List key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </List>
    )
  })

  return <ul>{elements}</ul>
}

export default TodoList

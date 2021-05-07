import React from 'react'

import TodoListItem from './todo-list-item'
import { List } from './styles'

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item

    return (
      <List key={id}>
        <TodoListItem {...itemProps} />
      </List>
    )
  })

  return <ul>{elements}</ul>
}

export default TodoList

import React from 'react'

import TodoListItem from '../TodoListItem'
import { Container, Divider, List, ListElement } from './styles'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item
    return (
      <ListElement key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
        {todos.length - 1 === id ? '' : <Divider></Divider>}
      </ListElement>
    )
  })

  return (
    <Container>
      <List>{elements}</List>
    </Container>
  )
}

export default TodoList

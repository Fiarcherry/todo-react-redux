import React from 'react'

import TodoListItem from '../TodoListItem'
import Container from '../Container'
import Divider from '../Divider'
import List from '../List'
import ListElement from '../ListElement'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item, index) => {
    const { id, ...itemProps } = item
    return (
      <ListElement key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
        {todos.length - 1 === index ? '' : <Divider />}
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

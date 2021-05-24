import React from 'react'

import TodoListItem from '../TodoListItem'
import Container from '../common/Container'
// import Divider from '../common/Divider'
import List from '../common/List'
import ListElement from '../common/ListElement'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item, index) => {
    const { id, ...itemProps } = item
    const last = todos.length - 1 === index

    return (
      <ListElement key={id} last={last}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
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

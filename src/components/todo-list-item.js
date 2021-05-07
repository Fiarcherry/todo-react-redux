import React from 'react'
import { DeleteButton, ImportantButton, Item } from './styles'

const TodoListItem = ({ label, important = false }) => {
  return (
    <Item important={important}>
      {label}
      <DeleteButton>Удалить</DeleteButton>
      <ImportantButton>Важное</ImportantButton>
    </Item>
  )
}

export default TodoListItem

import React from 'react'

import { Item, Label, DeleteButton, ImportantButton } from './styles'

const TodoListItem = ({
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  done,
  important,
}) => {
  return (
    <Item important={important} done={done}>
      <Label onClick={onToggleDone}>{label}</Label>
      <DeleteButton onClick={onDeleted}>Удалить</DeleteButton>
      <ImportantButton onClick={onToggleImportant}>Важное</ImportantButton>
    </Item>
  )
}

export default TodoListItem

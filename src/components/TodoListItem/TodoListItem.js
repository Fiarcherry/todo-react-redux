import React from 'react'

import Button from '../Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item, Label } from './styles'

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
      <Button mode="checked" onClick={onToggleDone}>
        {done ? (
          <FontAwesomeIcon icon="check-circle" size="lg" />
        ) : (
          <FontAwesomeIcon icon={['far', 'circle']} size="lg" />
        )}
      </Button>
      <Label onClick={onToggleDone}>{label}</Label>
      <Button onClick={onDeleted} mode="icon">
        <FontAwesomeIcon icon="trash-alt" size="lg" />
      </Button>
      <Button onClick={onToggleImportant} mode="icon">
        <FontAwesomeIcon icon="exclamation-circle" size="lg" />
      </Button>
    </Item>
  )
}

export default TodoListItem

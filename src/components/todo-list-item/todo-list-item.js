import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item, Label, Button, CheckedButton } from './styles'

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
      <CheckedButton onClick={onToggleDone}>
        {done ? (
          <FontAwesomeIcon icon="check-circle" size="lg" />
        ) : (
          <FontAwesomeIcon icon={['far', 'circle']} size="lg" />
        )}
      </CheckedButton>
      <Label onClick={onToggleDone}>{label}</Label>
      <Button onClick={onDeleted}>
        <FontAwesomeIcon icon="trash-alt" size="lg" />
      </Button>
      <Button onClick={onToggleImportant}>
        <FontAwesomeIcon icon="exclamation-circle" size="lg" />
      </Button>
    </Item>
  )
}

export default TodoListItem

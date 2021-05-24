import React from 'react'

import IconButton from '../common/Button/IconButton'
import CheckedButton from '../common/Button/CheckedButton'

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
      <CheckedButton onClick={onToggleDone}>
        {done ? (
          <FontAwesomeIcon icon="check-circle" size="lg" />
        ) : (
          <FontAwesomeIcon icon={['far', 'circle']} size="lg" />
        )}
      </CheckedButton>
      <Label onClick={onToggleDone}>{label}</Label>
      <IconButton onClick={onDeleted}>
        <FontAwesomeIcon icon="trash-alt" size="lg" />
      </IconButton>
      <IconButton onClick={onToggleImportant}>
        <FontAwesomeIcon icon="exclamation-circle" size="lg" />
      </IconButton>
    </Item>
  )
}

export default TodoListItem

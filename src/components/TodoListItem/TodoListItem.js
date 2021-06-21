import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import IconButton from '../common/Button/IconButton'
import CheckedButton from '../common/Button/CheckedButton'
import Container from '../common/Container'

import {
  deleteTodo,
  onTodoToggleDone,
  onTodoToggleImportant,
} from '../../handlers/todoHandler'
import {
  actionDeleteTodo,
  actionToggleDoneTodo,
  actionToggleImportantTodo,
} from '../../redux/actions/todosActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Label } from './styles'

const TodoListItem = ({
  id,
  label,
  done,
  important,
  dispatchToggleImportantTodo,
  dispatchToggleDoneTodo,
  dispatchDeleteTodo,
}) => {
  const faCheckedCircle = 'check-circle'
  const faCircle = ['far', 'circle']
  const faDelete = 'trash-alt'
  const faImportant = 'exclamation-circle'
  const faSize = 'lg'

  const handleDelete = useCallback(
    () => dispatchDeleteTodo(id),
    [id, dispatchDeleteTodo]
  )

  const handleToggleImportant = useCallback(
    () => dispatchToggleImportantTodo(id),
    [id, dispatchToggleImportantTodo]
  )

  const handleToggleDone = useCallback(
    () => dispatchToggleDoneTodo(id),
    [id, dispatchToggleDoneTodo]
  )

  return (
    <Container>
      <CheckedButton onClick={handleToggleDone}>
        <FontAwesomeIcon
          icon={done ? faCheckedCircle : faCircle}
          size={faSize}
        />
      </CheckedButton>
      <Label important={important} done={done} onClick={handleToggleDone}>
        {label}
      </Label>
      <IconButton onClick={handleDelete}>
        <FontAwesomeIcon icon={faDelete} size={faSize} />
      </IconButton>
      <IconButton onClick={handleToggleImportant}>
        <FontAwesomeIcon icon={faImportant} size={faSize} />
      </IconButton>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchToggleImportantTodo: (value) => {
      dispatch(actionToggleImportantTodo(value))
      onTodoToggleImportant(value)
    },
    dispatchToggleDoneTodo: (value) => {
      dispatch(actionToggleDoneTodo(value))
      onTodoToggleDone(value)
    },
    dispatchDeleteTodo: (value) => {
      dispatch(actionDeleteTodo(value))
      deleteTodo(value)
    },
  }
}

export default connect(null, mapDispatchToProps)(TodoListItem)

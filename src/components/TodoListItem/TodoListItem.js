import React, { useCallback, useMemo } from 'react'
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
  const fa = useMemo(
    () => ({
      checkedCircle: 'check-circle',
      circle: ['far', 'circle'],
      delete: 'trash-alt',
      important: 'exclamation-circle',
      size: 'lg',
    }),
    []
  )

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
          icon={done ? fa.checkedCircle : fa.circle}
          size={fa.size}
        />
      </CheckedButton>
      <Label important={important} done={done} onClick={handleToggleDone}>
        {label}
      </Label>
      <IconButton onClick={handleDelete}>
        <FontAwesomeIcon icon={fa.delete} size={fa.size} />
      </IconButton>
      <IconButton onClick={handleToggleImportant}>
        <FontAwesomeIcon icon={fa.important} size={fa.size} />
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

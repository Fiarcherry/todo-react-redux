import React, { useMemo } from 'react'
import { connect } from 'react-redux'

import TodoListItem from '../TodoListItem'
import Container from '../common/Container'
import List from '../common/List'
import ListElement from '../common/ListElement'

import { selectVisibleTodos } from '../../redux/selectors/todosSelectors'

const TodoList = ({ todos }) => {
  const todosMemo = useMemo(() => todos || [], [todos])

  const elements = todosMemo.map((item) => {
    const { id } = item

    return (
      <ListElement key={id}>
        <TodoListItem {...item} />
      </ListElement>
    )
  })

  return (
    <Container flexDirection="column">
      <List>{elements}</List>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  todos: selectVisibleTodos(state),
})

export default connect(mapStateToProps)(React.memo(TodoList))

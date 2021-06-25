import React, { useMemo } from 'react'
import { connect } from 'react-redux'

import TodoListItem from '../TodoListItem'
import Container from '../common/Container'
import List from '../common/List'
import ListElement from '../common/ListElement'
import Pagination from '../Pagination'

import {
  selectPagesCount,
  selectVisibleTodos,
} from '../../redux/selectors/todosSelectors'

const TodoList = ({ todos, pagesCount }) => {
  const elements = todos.map((item) => {
    const { id } = item

    return (
      <ListElement key={id}>
        <TodoListItem {...item} />
      </ListElement>
    )
  })

  const containerStyles = useMemo(
    () => ({ flexDirection: 'column', alignItems: 'stretch' }),
    []
  )

  return (
    <Container styles={containerStyles}>
      <List>{elements}</List>
      {pagesCount > 1 ? <Pagination pagesCount={pagesCount} /> : ''}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  todos: selectVisibleTodos(state),
  pagesCount: selectPagesCount(state),
})

export default connect(mapStateToProps)(React.memo(TodoList))

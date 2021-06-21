import React, { useMemo } from 'react'
import { connect } from 'react-redux'

import TodoListItem from '../TodoListItem'
import Container from '../common/Container'
import List from '../common/List'
import ListElement from '../common/ListElement'
import Pagination from '../Pagination'

import { selectVisibleTodos } from '../../redux/selectors/todosSelectors'

// import _ from 'lodash'

const TodoList = ({ todos }) => {
  const todosMemo = useMemo(() => todos || [], [todos])

  // const itemsPerPage = 10
  // const pagesCount = calcPagesCount(todosMemo.length, itemsPerPage)
  // const pages = _.range(pagesCount)
  // const todosOnPages = calcTodosOnPages(todosMemo, pagesCount, itemsPerPage)

  // const startElement = page * itemsPerPage

  // let elements = []

  // for (let i = 0; i < itemsPerPage; i++) {
  //   const item = todosMemo[startElement + i]

  //   if (item !== undefined) {
  //     elements.push(
  //       <ListElement key={item.id}>
  //         <TodoListItem {...item} />
  //       </ListElement>
  //     )
  //   }
  // }

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
      <Pagination />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  todos: selectVisibleTodos(state),
})

export default connect(mapStateToProps)(React.memo(TodoList))

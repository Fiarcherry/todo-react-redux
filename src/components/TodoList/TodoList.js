import React from 'react'

import TodoListItem from '../TodoListItem'
import Container from '../common/Container'
import List from '../common/List'
import ListElement from '../common/ListElement'

import {
  deleteTodo,
  onTodoToggleDone,
  onTodoToggleImportant,
} from '../../handlers/todoHandler'
import { connect } from 'react-redux'
import {
  actionDeleteTodo,
  actionToggleDoneTodo,
  actionToggleImportantTodo,
} from '../../redux/actions/todoActions'

const TodoList = ({
  todos,
  filter,
  query,
  dispatchToggleImportantTodo,
  dispatchToggleDoneTodo,
  dispatchDeleteTodo,
}) => {
  const calcSortOrder = (valueDone, valueImportant) => {
    const binary = `${Number(valueDone)}${Number(!valueImportant)}`

    return parseInt(binary, 2)
  }

  const sort = (items) => {
    items.sort((a, b) => {
      const aValue = calcSortOrder(a.done, a.important)
      const bValue = calcSortOrder(b.done, b.important)

      if (aValue === bValue) {
        return a.label > b.label ? 1 : a.label < b.label ? -1 : 0
      } else {
        return aValue > bValue ? 1 : -1
      }
    })
    return items
  }

  const search = (items, query) => {
    if (query.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
  }

  const filterTodos = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }

  const visibleItems = sort(search(filterTodos([...todos], filter), query))

  const elements = visibleItems.map((item, index) => {
    const { id, ...itemProps } = item
    const last = visibleItems.length - 1 === index

    return (
      <ListElement key={id} last={last}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => dispatchDeleteTodo(id)}
          onToggleImportant={() => dispatchToggleImportantTodo(id)}
          onToggleDone={() => dispatchToggleDoneTodo(id)}
        />
      </ListElement>
    )
  })

  return (
    <Container justifyContent="center">
      <List>{elements}</List>
    </Container>
  )
}

const mapStateToProps = ({ todos, filter }) => ({ todos, filter })

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

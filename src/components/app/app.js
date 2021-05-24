import React, { Component } from 'react'

import Wrapper from '../common/Wrapper'
import AppHeader from '../AddHeader'
import ThemeSelector from '../ThemeSelector'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import ItemAddForm from '../ItemAddForm'

import {
  addTodo,
  deleteTodo,
  getTodos,
  onTodoToggleDone,
  onTodoToggleImportant,
} from '../../handlers/todoHandler'
import { getTheme, setTheme } from '../../handlers/themeHandler'
import { getFilter, setFilter } from '../../handlers/filterHandler'

import Theme from '../../Themes'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faExclamationCircle,
  faTrashAlt,
  faCheckCircle,
  faListUl,
} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { purple } from '../../Themes/colors'

library.add(faTrashAlt, faExclamationCircle, faCheckCircle, faListUl, faCircle)

export default class App extends Component {
  maxId = 0

  state = {
    todoData: [],
    query: '',
    filter: 'all',
    theme: purple,
  }

  addItem = (text) => {
    addTodo(text)
    this.updateState()
  }

  deleteItem = (id) => {
    deleteTodo(id)
    this.updateState()
  }

  onToggleImportant = (id) => {
    onTodoToggleImportant(id)
    this.updateState()
  }

  onToggleDone = (id) => {
    onTodoToggleDone(id)
    this.updateState()
  }

  changeTheme = (theme) => {
    setTheme(theme)
    this.setState(getTheme)
  }

  onFilterChange = (filter) => {
    setFilter(filter)
    this.setState({ filter })
  }

  updateState = () => {
    this.setState(getTodos)
  }

  onSearchChange = (query) => {
    this.setState({ term: query })
  }

  search = (items, query) => {
    if (query.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
  }

  filter = (items, filter) => {
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

  render() {
    const { query } = this.state

    const todoData = getTodos()
    const theme = getTheme()
    const filter = getFilter()

    const visibleItems = this.search(this.filter(todoData, filter), query)
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <Theme theme={theme}>
        <Wrapper>
          <AppHeader toDo={todoCount} done={doneCount} />
          <ThemeSelector changeTheme={this.changeTheme} />
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <ItemAddForm onItemAdded={this.addItem} />
        </Wrapper>
      </Theme>
    )
  }
}

import React, { useCallback, useState } from 'react'

import Wrapper from '../common/Wrapper'
import AppHeader from '../AddHeader'
import ThemeSelector from '../ThemeSelector'
import ThemeChanger from '../ThemeChanger/ThemeChanger'
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

library.add(faTrashAlt, faExclamationCircle, faCheckCircle, faListUl, faCircle)

const App = () => {
  const [todoData, setTodoData] = useState(getTodos())
  const [filterData, setFilterData] = useState(getFilter())
  const [themeData, setThemeData] = useState(getTheme())
  const [query, setQuery] = useState('')

  const addItem = (text) => {
    addTodo(text)
    updateTodos()
  }

  const deleteItem = (id) => {
    deleteTodo(id)
    updateTodos()
  }

  const onToggleImportant = (id) => {
    onTodoToggleImportant(id)
    updateTodos()
  }

  const onToggleDone = (id) => {
    onTodoToggleDone(id)
    updateTodos()
  }

  const changeTheme = (theme) => {
    setTheme(theme)
    updateTheme()
  }

  const onFilterChange = (filter) => {
    setFilter(filter)
    updateFilter()
  }

  const updateTodos = () => {
    setTodoData(getTodos())
  }

  const updateTheme = () => {
    setThemeData(getTheme())
  }

  const updateFilter = () => {
    setFilterData(getFilter())
  }

  const onSearchChange = useCallback(
    (query) => {
      setQuery(query)
    },
    [setQuery]
  )

  const sort = (items) => {
    items.sort((a, b) => {
      return a.important > b.important ? 1 : -1
    })

    items.sort((a, b) => {
      return a.done > b.done ? 1 : -1
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

  const filter = (items, filter) => {
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

  const visibleItems = sort(search(filter(todoData, filterData), query))
  const doneCount = todoData.filter((el) => el.done).length
  const todoCount = todoData.length - doneCount

  return (
    <Theme theme={themeData}>
      <Wrapper>
        <AppHeader toDo={todoCount} done={doneCount} />
        <ThemeSelector changeTheme={changeTheme} />
        <ThemeChanger />
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter filter={filterData} onFilterChange={onFilterChange} />
        <TodoList
          todos={visibleItems}
          onDeleted={deleteItem}
          onToggleImportant={onToggleImportant}
          onToggleDone={onToggleDone}
        />
        <ItemAddForm onItemAdded={addItem} />
      </Wrapper>
    </Theme>
  )
}

export default App

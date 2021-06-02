import React, { useCallback, useState } from 'react'

import Wrapper from '../common/Wrapper'
import AppHeader from '../AddHeader'
import ThemeSelector from '../ThemeSelector'
import ThemeChanger from '../ThemeChanger/ThemeChanger'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import ItemAddForm from '../ItemAddForm'

import { getTodos } from '../../handlers/todoHandler'
import { getTheme } from '../../handlers/themeHandler'
import { getFilter } from '../../handlers/filterHandler'

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

  const onTodosChange = useCallback(() => {
    console.log('onTodosChange')
    setTodoData(getTodos())
  }, [])

  const onFilterChange = useCallback(() => {
    setFilterData(getFilter())
  }, [])

  const onThemeChange = useCallback(() => {
    setThemeData(getTheme())
  }, [])

  const onSearchChange = useCallback(
    (query) => {
      setQuery(query)
    },
    [setQuery]
  )

  const doneCount = todoData.filter((el) => el.done).length
  const todoCount = todoData.length - doneCount

  return (
    <Theme theme={themeData}>
      <Wrapper>
        <AppHeader toDo={todoCount} done={doneCount} />
        <ThemeSelector onThemeChange={onThemeChange} />
        <ThemeChanger onThemeChange={onThemeChange} />
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter onFilterChange={onFilterChange} />
        <TodoList
          todos={todoData}
          filterData={filterData}
          query={query}
          onTodosChange={onTodosChange}
        />
        <ItemAddForm onTodosChange={onTodosChange} />
      </Wrapper>
    </Theme>
  )
}

export default App

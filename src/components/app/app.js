import React, { useCallback, useState } from 'react'

import Wrapper from '../common/Wrapper'
import AppHeader from '../AddHeader'
import ThemeSelector from '../ThemeSelector'
import ThemeChanger from '../ThemeChanger/ThemeChanger'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import ItemAddForm from '../ItemAddForm'

import { addTodo, getTodos } from '../../handlers/todoHandler'
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
  console.log('themeAppData', themeData)
  const [query, setQuery] = useState('')

  const onTodosChange = useCallback(() => {
    setTodoData(getTodos())
  }, [setTodoData])

  const onFilterChange = useCallback(() => {
    //console.log('onFilterChange')
    setFilterData(getFilter())
  }, [setFilterData])

  const onThemeChange = useCallback(() => {
    console.log('onThemeChange')
    setThemeData(getTheme())
  }, [setThemeData])

  const onSearchChange = useCallback(
    (query) => {
      setQuery(query)
    },
    [setQuery]
  )

  const addItem = (text) => {
    addTodo(text)
    onTodosChange()
  }




  const doneCount = todoData.filter((el) => el.done).length
  const todoCount = todoData.length - doneCount

  return (
    <Theme theme={themeData}>
      <Wrapper>
        <AppHeader toDo={todoCount} done={doneCount} />
        <ThemeSelector onThemeChange={onThemeChange} />
        <ThemeChanger />
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter onFilterChange={onFilterChange} />
        <TodoList
          filterData={filterData}
          query={query}
          onTodosChange={onTodosChange}
        />
        <ItemAddForm onItemAdded={addItem} />
      </Wrapper>
    </Theme>
  )
}

export default App

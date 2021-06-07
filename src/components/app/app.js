import React, { useCallback, useState } from 'react'

import Wrapper from '../common/Wrapper'
import AppHeader from '../AddHeader'
import ThemeSelector from '../ThemeSelector'
import ThemeChanger from '../ThemeChanger/ThemeChanger'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import ItemAddForm from '../ItemAddForm'

import Theme from '../../utils/Theme'

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
  const [query, setQuery] = useState('')

  const onSearchChange = useCallback(
    (query) => {
      setQuery(query)
    },
    [setQuery]
  )

  return (
    <Theme>
      <Wrapper>
        <AppHeader />
        <ThemeSelector />
        <ThemeChanger />
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter />
        <TodoList query={query} />
        <ItemAddForm />
      </Wrapper>
    </Theme>
  )
}

export default App

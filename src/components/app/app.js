import React from 'react'

import Wrapper from '../common/Wrapper'
import AppHeader from '../AddHeader'
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
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

library.add(
  faTrashAlt,
  faExclamationCircle,
  faCheckCircle,
  faListUl,
  faCircle,
  faArrowLeft,
  faArrowRight
)

const App = () => {
  return (
    <Theme>
      <Wrapper>
        <AppHeader />
        {/* <ColorPicker /> */}
        <ThemeChanger />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList />
        <ItemAddForm />
      </Wrapper>
    </Theme>
  )
}

export default App

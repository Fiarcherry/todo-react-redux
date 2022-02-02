import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Wrapper from '../common/Wrapper'
import AppHeader from '../AddHeader'
import ThemeChanger from '../ThemeChanger/ThemeChanger'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import ItemAddForm from '../ItemAddForm'

import Theme from '../../utils/Theme'
import { actionSetFilter } from '../../redux/actions/filterActions'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faExclamationCircle,
  faTrashAlt,
  faCheckCircle,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { setFilter } from '../../handlers/filterHandler'
import { actionSetPage } from '../../redux/actions/pageActions'
import filterTypes from '../../utils/filterTypes'

library.add(
  faTrashAlt,
  faExclamationCircle,
  faCheckCircle,
  faCircle,
  faArrowLeft,
  faArrowRight
)

const App = ({ dispatchSetFilter }) => {
  const filterRoutes = filterTypes.map((item) => {
    return (
      <Route
        key={item}
        path={'/' + item}
        render={() => dispatchSetFilter(item)}
      />
    )
  })

  return (
    <Router>
      <Theme>
        <Wrapper>
          <AppHeader />
          <ThemeChanger />
          <SearchPanel />
          <ItemStatusFilter />

          <Switch>
            <Route exact path="/" render={() => dispatchSetFilter('all')} />
            {filterRoutes}
            <Redirect to="/" />
          </Switch>

          <TodoList />
          <ItemAddForm />
        </Wrapper>
      </Theme>
    </Router>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetFilter: (value) => {
      dispatch(actionSetFilter(value))
      setFilter(value)

      dispatch(actionSetPage(0))
    },
  }
}

export default connect(null, mapDispatchToProps)(App)

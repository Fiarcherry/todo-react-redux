import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import ItemStatusFilter from './components/item-status-filter'
import TodoList from './components/todo-list'

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
      <ItemStatusFilter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

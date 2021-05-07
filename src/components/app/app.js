import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'

const App = () => {
  const todoData = [
    { id: 0, label: 'Drink Coffee', important: false },
    { id: 1, label: 'Make Awesome App', important: true },
    { id: 2, label: 'Have a lunch', important: false },
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  )
}

export default App

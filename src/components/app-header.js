import React from 'react'
import { Header, TodosLeft } from './styles'

const AppHeader = () => {
  return (
    <div>
      <Header>My Todo List</Header>
      <TodosLeft>1 more to do, 3 done</TodosLeft>
    </div>
  )
}

export default AppHeader

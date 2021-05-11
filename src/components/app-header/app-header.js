import React from 'react'

import { Header, TodosLeft } from './styles'

const AppHeader = ({ toDo, done }) => {
  return (
    <div>
      <Header>My Todo List</Header>
      <TodosLeft>
        {toDo} more to do, {done} done
      </TodosLeft>
    </div>
  )
}

export default AppHeader

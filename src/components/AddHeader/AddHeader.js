import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Header, TodosLeft } from './styles'

const AppHeader = ({ toDo, done }) => {
  return (
    <Container>
      <Header>
        <FontAwesomeIcon icon="list-ul" size="lg" pull="left" />
        My Todo List
      </Header>
      <TodosLeft>
        {toDo} more to do, {done} done
      </TodosLeft>
    </Container>
  )
}

export default AppHeader

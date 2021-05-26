import React from 'react'

import Container from '../common/Container'
import Title from '../Title'
import TodosLeft from '../TodosLeft'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AppHeader = ({ toDo, done }) => {
  return (
    <Container flexDirection="column">
      <Title text="My Todo List">
        <FontAwesomeIcon icon="list-ul" size="lg" pull="left" />
      </Title>
      <TodosLeft toDo={toDo} done={done} />
    </Container>
  )
}

export default AppHeader

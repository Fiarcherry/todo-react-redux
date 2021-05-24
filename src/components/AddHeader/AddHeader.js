import React from 'react'

import Container from '../common/Container'
import Title from '../Title'
import TodosLeft from '../TodosLeft'

const AppHeader = ({ toDo, done }) => {
  return (
    <Container flexDirection="column" alignItems="center">
      <Title />
      <TodosLeft toDo={toDo} done={done} />
    </Container>
  )
}

export default AppHeader

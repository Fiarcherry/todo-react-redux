import React from 'react'

import Container from '../Container'
import Title from '../Title'
import TodosLeft from '../TodosLeft'
import Button from '../Button'

const AppHeader = ({ toDo, done }) => {
  const toggleTheme = () => {}
  return (
    <Container flexDirection="column" alignItems="center">
      <Title />
      <TodosLeft toDo={toDo} done={done} />
      <Button title="Change Theme" onClick={() => toggleTheme} />
    </Container>
  )
}

export default AppHeader
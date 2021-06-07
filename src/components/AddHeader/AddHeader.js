import React from 'react'

import Container from '../common/Container'
import Title from '../Title'
import TodosLeft from '../TodosLeft'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

const AppHeader = ({ doneCount, todoCount }) => {
  return (
    <Container flexDirection="column">
      <Title text="My Todo List">
        <FontAwesomeIcon icon="list-ul" size="lg" pull="left" />
      </Title>
      <TodosLeft toDo={todoCount} done={doneCount} />
    </Container>
  )
}

const mapStateToProps = ({ todos }) => { 
  const doneCount = todos.filter((el) => el.done).length
  const todoCount = todos.length - doneCount

  return {doneCount, todoCount} 
}

export default connect(mapStateToProps)(AppHeader)

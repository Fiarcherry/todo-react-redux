import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo, findMaxTodoId } from '../../handlers/todoHandler'
import { actionAddTodo } from '../../redux/actions/todoActions'

import Button from '../common/Button'
import Container from '../common/Container'
import Form from '../common/Form'
import Input from '../common/Input'

const ItemAddForm = ({ dispatchAddTodo }) => {
  const [label, setLabel] = useState('')

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatchAddTodo(label)

    setLabel('')
  }

  const inputStyles = { flexGrow: '1', padding: '10px 20px' }

  return (
    <Container justifyContent="center">
      <Form onSubmit={onSubmit} flex>
        <Input
          onChange={(e) => onLabelChange(e)}
          placeholder="What needs to be done"
          value={label}
          styles={inputStyles}
        />
        <Button title="Add Item" />
      </Form>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddTodo: (value) => {
      const maxId = findMaxTodoId()
      const nextId = maxId + 1
      dispatch(actionAddTodo(nextId, value))
      addTodo(value)
    },
  }
}

export default connect(null, mapDispatchToProps)(ItemAddForm)

import React, { useState } from 'react'

import Button from '../common/Button'
import Container from '../common/Container'
import Form from '../common/Form'
import Input from '../common/Input'

const ItemAddForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState('')

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onItemAdded(label)
    setLabel('')
  }

  const inputStyles = { flexGrow: '1', padding: '10px 20px' }

  return (
    <Container justifyContent="center">
      <Form onSubmit={onSubmit} flex>
        <Input
          onChange={onLabelChange}
          placeholder="What needs to be done"
          value={label}
          styles={inputStyles}
        />
        <Button title="Add Item" />
      </Form>
    </Container>
  )
}

export default ItemAddForm

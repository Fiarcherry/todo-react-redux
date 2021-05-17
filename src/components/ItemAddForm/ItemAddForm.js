import React, { Component } from 'react'

import Button from '../Button'
import Container from '../Container'
import Form from '../Form/Form'
import Input from '../Input/Input'

export default class ItemAddForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <Container justifyContent="center">
        <Form onSubmit={this.onSubmit} flex>
          <Input
            onChange={this.onLabelChange}
            placeholder="What needs to be done"
            value={this.state.label}
            flexGrow="4"
          />
          <Button title="Add Item" />
        </Form>
      </Container>
    )
  }
}

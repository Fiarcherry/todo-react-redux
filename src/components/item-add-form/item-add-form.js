import React, { Component } from 'react'

import { Button, Form, Input } from './styles'

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
      <Form onSubmit={this.onSubmit}>
        <Input
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <Button>Add Item</Button>
      </Form>
    )
  }
}

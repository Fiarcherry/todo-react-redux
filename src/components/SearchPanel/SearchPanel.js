import React, { Component } from 'react'

import Container from '../Container'
import Input from '../Input'

export default class SearchPanel extends Component {
  state = {
    term: '',
  }

  onSearchChange = (e) => {
    const term = e.target.value
    this.setState({ term })
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <Container justifyContent="center">
        <Input
          type="text"
          placeholder="type to search"
          value={this.state.term}
          onChange={this.onSearchChange}
          margin="0 0 20px 0"
        />
      </Container>
    )
  }
}
import React, { Component } from 'react'

import { Container, Input } from './styles'

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
      <Container>
        <Input
          type="text"
          placeholder="type to search"
          value={this.state.term}
          onChange={this.onSearchChange}
        />
      </Container>
    )
  }
}

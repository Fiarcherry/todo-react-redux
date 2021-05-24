import React, { Component } from 'react'

import Container from '../common/Container'
import Input from '../common/Input'

export default class SearchPanel extends Component {
  state = {
    term: '',
  }

  onSearchChange = (e) => {
    const term = e.target.value
    this.setState({ term })
    this.props.onSearchChange(term)
  }

  inputStyles = { margin: '0 0 20px 0' }

  render() {
    return (
      <Container justifyContent="center">
        <Input
          type="text"
          placeholder="type to search"
          value={this.state.term}
          onChange={this.onSearchChange}
          styles={this.inputStyles}
        />
      </Container>
    )
  }
}

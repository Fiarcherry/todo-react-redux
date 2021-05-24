import React, { Component } from 'react'

import Container from '../common/Container'
import FilterButton from '../common/Button/FilterButton'

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  render() {
    const { filter, onFilterChange } = this.props

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name
      return (
        <Button
          type="button"
          key={name}
          isActive={isActive}
          onClick={() => onFilterChange(name)}
          title={label}
          mode="filter"
        />
      )
    })

    return <Container justifyContent="center">{buttons}</Container>
  }
}

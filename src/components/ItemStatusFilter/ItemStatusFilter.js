import React, { Component } from 'react'

import Container from '../common/Container'
import FilterButton from '../common/Button/FilterButton'

import filters from '../../assets/filters'

export default class ItemStatusFilter extends Component {
  render() {
    const { filter, onFilterChange } = this.props

    const elements = filters.map((item) => {
      const isActive = filter === item
      return (
        <FilterButton
          type="button"
          key={item}
          isActive={isActive}
          onClick={() => onFilterChange(item)}
          title={item[0].toUpperCase() + item.slice(1)}
        />
      )
    })

    return <Container justifyContent="center">{elements}</Container>
  }
}

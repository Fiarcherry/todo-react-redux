import React from 'react'
import { FilterButton } from './styles'

const ItemStatusFilter = () => {
  return (
    <div>
      <FilterButton>All</FilterButton>
      <FilterButton>Active</FilterButton>
      <FilterButton>Done</FilterButton>
    </div>
  )
}

export default ItemStatusFilter

import React, { useEffect, useState } from 'react'

import Container from '../common/Container'
import FilterButton from '../common/Button/FilterButton'

import filters from '../../assets/filters'

import { getFilter, setFilter } from '../../handlers/filterHandler'

const ItemStatusFilter = ({ onFilterChange }) => {
  const [filterData, setFilterData] = useState(getFilter())

  const handleFilterChange = (value) => {
    //console.log('handle')
    setFilter(value)
    setFilterData(value)
  }

  useEffect(() => {
    onFilterChange(filterData)
  }, [filterData, onFilterChange])

  const elements = filters.map((item) => {
    const isActive = filterData === item
    return (
      <FilterButton
        type="button"
        key={item}
        isActive={isActive}
        onClick={() => handleFilterChange(item)}
        title={item[0].toUpperCase() + item.slice(1)}
      />
    )
  })

  return <Container justifyContent="center">{elements}</Container>
}

export default ItemStatusFilter

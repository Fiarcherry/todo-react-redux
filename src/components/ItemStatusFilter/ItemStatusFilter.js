import React from 'react'
import { connect } from 'react-redux'

import Container from '../common/Container'
import FilterButton from '../common/Button/FilterButton'

import filterTypes from '../../utils/filterTypes'
import { setFilter } from '../../handlers/filterHandler'

import { actionSetFilter } from '../../redux/actions/filterActions'

const ItemStatusFilter = ({ filter, dispatchSetFilter }) => {
  const elements = filterTypes.map((item) => {
    const isActive = filter === item
    return (
      <FilterButton
        type="button"
        key={item}
        isActive={isActive}
        onClick={() => isActive || dispatchSetFilter(item)}
        title={item[0].toUpperCase() + item.slice(1)}
      />
    )
  })

  return <Container justifyContent="center">{elements}</Container>
}

const mapStateToProps = ({ filter }) => ({ filter })

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetFilter: (value) => {
      dispatch(actionSetFilter(value))
      setFilter(value)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter)

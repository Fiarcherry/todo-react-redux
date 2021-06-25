import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Container from '../common/Container'
import FilterButton from '../common/Button/FilterButton'

import filterTypes from '../../utils/filterTypes'
import { setFilter } from '../../handlers/filterHandler'
import { actionSetFilter } from '../../redux/actions/filterActions'
import { actionSetPage } from '../../redux/actions/pageActions'

import startCase from 'lodash/startCase'

const ItemStatusFilter = ({ filter, dispatchSetFilter }) => {
  const elements = filterTypes.map((item) => {
    const isActive = filter === item

    return (
      <Link key={item} to={'/' + item}>
        <FilterButton
          type="button"
          isActive={isActive}
          onClick={() => dispatchSetFilter(item)}
          title={startCase(item)}
        />
      </Link>
    )
  })

  return <Container>{elements}</Container>
}

const mapStateToProps = ({ filter }) => ({ filter })

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetFilter: (value) => {
      dispatch(actionSetFilter(value))
      setFilter(value)

      dispatch(actionSetPage(0))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter)

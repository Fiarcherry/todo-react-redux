import React, { useMemo } from 'react'
import { connect } from 'react-redux'

import Container from '../common/Container'
import FilterButton from '../common/Button/FilterButton'

import filterTypes from '../../utils/filterTypes'
import { setFilter } from '../../handlers/filterHandler'
import { actionSetFilter } from '../../redux/actions/filterActions'
import { actionSetPage } from '../../redux/actions/pageActions'

import _ from 'lodash'

const ItemStatusFilter = ({ filter, dispatchSetFilter }) => {
  const elements = useMemo(
    () =>
      filterTypes.map((item) => {
        const isActive = filter === item

        // const handleOnClick = () => dispatchSetFilter(item)

        return (
          <FilterButton
            type="button"
            key={item}
            isActive={isActive}
            onClick={() => dispatchSetFilter(item)}
            title={_.startCase(item)}
          />
        )
      }),
    [filter, dispatchSetFilter]
  )

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

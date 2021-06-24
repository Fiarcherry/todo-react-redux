import React from 'react'
import { connect } from 'react-redux'

import Container from '../common/Container'
import FilterButton from '../common/Button/FilterButton'

import filterTypes from '../../utils/filterTypes'
import { setFilter } from '../../handlers/filterHandler'
import { actionSetFilter } from '../../redux/actions/filterActions'

import _ from 'lodash'

const ItemStatusFilter = ({ filter, dispatchSetFilter }) => {

  return <Container justifyContent="center">{elements}</Container>
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

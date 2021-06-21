import React, { useCallback, useMemo } from 'react'
import { connect } from 'react-redux'

import Container from '../common/Container'
import Input from '../common/Input'

import { actionSetQuery } from '../../redux/actions/queryActions'

const SearchPanel = ({ query, dispatchSetQuery }) => {
  const inputStyles = useMemo(
    () => ({ margin: '0 0 20px 0', padding: '10px 20px' }),
    []
  )

  const handleInputChange = useCallback(
    (e) => {
      dispatchSetQuery(e.target.value)
    },
    [dispatchSetQuery]
  )

  return (
    <Container justifyContent="center">
      <Input
        type="text"
        placeholder="type to search"
        value={query}
        onChange={handleInputChange}
        styles={inputStyles}
      />
    </Container>
  )
}

const mapStateToProps = ({ query }) => ({ query })

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetQuery: (value) => {
      dispatch(actionSetQuery(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)

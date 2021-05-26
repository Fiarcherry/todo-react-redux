import React, { useEffect, useState } from 'react'

import Container from '../common/Container'
import Input from '../common/Input'

const SearchPanel = ({ onSearchChange }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    onSearchChange(query)
  }, [query, onSearchChange])

  const searchChange = (e) => {
    setQuery(e.target.value)
    // onSearchChange(e.target.value)
  }

  const inputStyles = { margin: '0 0 20px 0', padding: '10px 20px' }

  return (
    <Container justifyContent="center">
      <Input
        type="text"
        placeholder="type to search"
        value={query}
        onChange={searchChange}
        styles={inputStyles}
      />
    </Container>
  )
}

export default SearchPanel

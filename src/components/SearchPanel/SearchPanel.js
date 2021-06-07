import React, { useEffect, useState } from 'react'

import Container from '../common/Container'
import Input from '../common/Input'

const SearchPanel = ({ onQueryChange }) => {
  const [query, setQuery] = useState('')

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    onQueryChange(query)
  }, [query, onQueryChange])

  const inputStyles = { margin: '0 0 20px 0', padding: '10px 20px' }

  return (
    <Container justifyContent="center">
      <Input
        type="text"
        placeholder="type to search"
        value={query}
        onChange={handleQueryChange}
        styles={inputStyles}
      />
    </Container>
  )
}

export default SearchPanel

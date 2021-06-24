import React, { useMemo } from 'react'

import Container from '../common/Container'
import Title from '../Title'
import TodosLeft from '../TodosLeft'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AppHeader = () => {
  const fa = useMemo(() => ({ pull: 'left', list: 'list-ul', size: 'lg' }), [])

  const containerStyles = useMemo(() => ({ flexDirection: 'column' }), [])

  return (
    <Container styles={containerStyles}>
      <Title text="My Todo List">
        <FontAwesomeIcon icon={fa.list} size={fa.size} pull={fa.pull} />
      </Title>
      <TodosLeft />
    </Container>
  )
}

export default AppHeader

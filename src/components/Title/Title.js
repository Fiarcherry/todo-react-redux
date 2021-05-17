import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Text } from './styles'

const Title = () => {
  return (
    <Text>
      <FontAwesomeIcon icon="list-ul" size="lg" pull="left" />
      My Todo List
    </Text>
  )
}

export default Title

import React from 'react'

import { Text } from './styles'

const Title = ({ text, children }) => {
  return (
    <Text>
      {children}
      {text}
    </Text>
  )
}

export default React.memo(Title)

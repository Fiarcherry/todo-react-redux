import React from 'react'

import { StyledContainer } from './styles'

const Container = ({
  children,
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  ...props
}) => {
  return (
    <StyledContainer
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...props}
    >
      {children}
    </StyledContainer>
  )
}

export default Container

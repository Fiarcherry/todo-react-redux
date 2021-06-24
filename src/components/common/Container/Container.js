import React from 'react'

import { StyledContainer } from './styles'

const Container = ({
  children,

  styles = {},
  ...props
}) => {
  const inputDefaultStyles = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const { ...allStyles } = {
    ...inputDefaultStyles,
    ...styles,
  }

  return (
    <StyledContainer {...props} {...allStyles}>
      {children}
    </StyledContainer>
  )
}

export default Container

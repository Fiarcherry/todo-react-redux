import React from 'react'

import { StyledForm } from './styles'

const Form = ({ onSubmit, children, flex = false, ...props }) => {
  return (
    <StyledForm onSubmit={onSubmit} flex={flex} {...props}>
      {children}
    </StyledForm>
  )
}

export default Form

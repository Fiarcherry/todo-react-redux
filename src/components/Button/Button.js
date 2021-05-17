import React from 'react'

import {
  StyledButton,
  StyledIconButton,
  StyledFilterButton,
  StyledCheckedButton,
} from './styles'

const Button = ({
  title = 'Button',
  isActive = false,
  mode = '',
  children,
  ...props
}) => {
  switch (mode) {
    case 'filter':
      return (
        <StyledFilterButton isActive={isActive} {...props}>
          {title}
        </StyledFilterButton>
      )
    case 'icon':
      return <StyledIconButton {...props}>{children}</StyledIconButton>
    case 'checked':
      return <StyledCheckedButton {...props}>{children}</StyledCheckedButton>

    default:
      return <StyledButton {...props}>{title}</StyledButton>
  }
}

export default Button

import React from 'react'
import {
  StyledButton,
  StyledCheckedButton,
  StyledFilterButton,
  StyledIconButton,
} from './styles'

const Button = ({
  title = 'Button',
  isActive = false,
  buttonType = '',
  children,
  ...props
}) => {

  switch (buttonType) {
    case 'filter':
      return (
        <StyledFilterButton isActive={isActive} {...props}>
          {title}
          {children}
        </StyledFilterButton>
      )
    case 'icon':
      return (
        <StyledIconButton o {...props}>
          {children}
        </StyledIconButton>
      )
    case 'checked':
      return <StyledCheckedButton {...props}>{children}</StyledCheckedButton>

    default:
      return (
        <StyledButton isActive={isActive} {...props}>
          {title}
          {children}
        </StyledButton>
      )
  }
}

export default React.memo(Button)

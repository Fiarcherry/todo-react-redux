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
  // return (
  //   <StyledButton buttonType={buttonType} isActive={isActive}>
  //     {title}
  //     {children}
  //   </StyledButton>
  // )
  switch (buttonType) {
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
      return (
        <StyledButton isActive={isActive} {...props}>
          {title}
          {children}
        </StyledButton>
      )
  }
}

export default Button

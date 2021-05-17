import React from 'react'

import { StyledInput } from './styles'

const Input = ({
  type = 'text',
  placeholder = 'Введите текст',
  onChange,
  value,
  flexGrow = '1',
  margin = 'unset',
  padding = '10px 20px',
  width = '100%',
  ...props
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      flexGrow={flexGrow}
      margin={margin}
      padding={padding}
      width={width}
      {...props}
    ></StyledInput>
  )
}

export default Input

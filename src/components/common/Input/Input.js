import React from 'react'

import { StyledInput } from './styles'

const Input = ({
  type = 'text',
  placeholder = 'Введите текст',
  onChange,
  value,
  label = 'hth',
  styles = {},
  ...props
}) => {
  const inputDefaultStyles = {
    flexGrow: '1',
    margin: 'unset',
    padding: 'unset',
  }

  const { ...allStyles } = {
    ...inputDefaultStyles,
    ...styles,
  }

  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      label={label}
      {...props}
      {...allStyles}
    ></StyledInput>
  )
}

export default React.memo(Input)

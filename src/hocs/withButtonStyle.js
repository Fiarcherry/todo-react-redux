import React from 'react'

const withButtonStyle =
  (buttonType, { ...props }) =>
  (WrappedComponent) => {
    return <WrappedComponent buttonType={buttonType} {...props} />
  }

export default withButtonStyle

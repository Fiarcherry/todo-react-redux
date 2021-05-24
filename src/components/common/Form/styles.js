import styled from 'styled-components'

const StyledForm = styled.form`
  display: ${({ flex }) => (flex ? 'flex' : 'inline-block')};
  flex-grow: 1;
  max-width: 600px;
`

export { StyledForm }

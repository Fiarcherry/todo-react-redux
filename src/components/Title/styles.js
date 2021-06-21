import styled from 'styled-components'

const Text = styled.h1`
  color: ${({ theme }) => theme.colors.primary1};
  font-family: ${({ theme }) => theme.fonts.comicSans};
  font-size: 38px;
  margin: 10px auto;
  text-align: center;
`

export { Text }

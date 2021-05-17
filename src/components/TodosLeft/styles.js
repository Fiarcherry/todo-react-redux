import styled from 'styled-components'

const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary5};
  font-family: ${({ theme }) => theme.fonts.comicSans};
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 50px;
`

export { Text }

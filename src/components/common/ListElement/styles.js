import styled from 'styled-components'

const StyledListElement = styled.li`
  list-style: none;
  ${({ last, theme }) =>
    !last && `border-bottom: 2px solid ${theme.colors.primary3}`}
`

export { StyledListElement }

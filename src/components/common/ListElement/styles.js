import styled from 'styled-components'

const StyledListElement = styled.li`
  list-style: none;

  :not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary3};
  }
`

export { StyledListElement }

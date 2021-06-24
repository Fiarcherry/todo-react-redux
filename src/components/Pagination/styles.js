import styled from 'styled-components'

const StyledSpan = styled.button`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary3 : theme.colors.primary1};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary1 : theme.colors.primary3};

  border: 1px solid ${({ theme }) => theme.colors.primary1};
  border-radius: 4px;

  font-family: ${({ theme }) => theme.fonts.comicSans};
  font-size: 16px;

  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};

  height: 35px;
  padding: 0;

  &:hover {
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.primary3 : theme.colors.primary4};
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.primary1 : theme.colors.primary2};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary3};
    background-color: ${({ theme }) => theme.colors.primary1};
  }

  &:disabled {
    pointer-events: none;
    color: #bbb;
    background-color: #eee;
    border: 1px solid #bbb;
  }
`

const StyledArrow = styled(StyledSpan)`
  margin: 10px 15px;
  width: 45px;
`

const StyledPage = styled(StyledSpan)`
  margin: 0 3px;
  width: 35px;
`

const StyledDivider = styled.span`
  margin: 0 3px;
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 24px;
`

export { StyledArrow, StyledPage, StyledDivider }

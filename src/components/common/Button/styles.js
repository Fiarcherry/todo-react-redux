import styled from 'styled-components'

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.primary1};
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary3};

  font-family: ${({ theme }) => theme.fonts.comicSans};
  font-size: 16px;
  
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};

  transition: all 100ms ease-in-out;

  min-width: fit-content;
  max-width: 200px;

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
`

const StyledFilterButton = styled(StyledButton)`
  margin: 5px 0px;
  padding: 8px 10px;
  flex-grow: 1;
  justify-content: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary3 : theme.colors.primary1};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary1 : theme.colors.primary3};
`

const StyledIconButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.primary2};
  margin: 3px 0px 3px 6px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary1};
  border-radius: 4px;
  background-color: white;

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
    background-color: ${({ theme }) => theme.colors.primary3};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary2};
    background-color: ${({ theme }) => theme.colors.primary4};
  }
`

const StyledCheckedButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.primary2};
  margin: 3px 6px 3px 0px;
  padding: 0;
  border: none;
  background-color: white;

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
    background-color: white;
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary2};
  }
`

export {
  StyledButton,
  StyledIconButton,
  StyledFilterButton,
  StyledCheckedButton,
}

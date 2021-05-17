import styled from 'styled-components'

const StyledButton = styled.button`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary3 : theme.colors.primary1};
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary1 : theme.colors.primary3};
  transition: 100ms ease-in-out;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};

  min-width: fit-content;
  max-width: 200px;

  &:hover {
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.primary3 : theme.colors.primary4};
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.primary1 : theme.colors.primary2};
  }
`

const StyledFilterButton = styled(StyledButton)`
  margin: 5px 0px;
  padding: 8px 10px;
  flex-grow: 1;
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
`

export {
  StyledButton,
  StyledIconButton,
  StyledFilterButton,
  StyledCheckedButton,
}

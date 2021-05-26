import styled from 'styled-components'

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.primary2};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-family: ${({ theme }) => theme.fonts.comicSans};
  font-size: 16px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary2};
  
  transition: all 250ms ease-in-out;

  flex-grow: ${({ flexGrow }) => flexGrow};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 560px;

  ::placeholder {
    transition: all 250ms ease-in-out;
    color: ${({ theme }) => theme.colors.primary2};
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary1};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary1};

    ::placeholder {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`

export { StyledInput }

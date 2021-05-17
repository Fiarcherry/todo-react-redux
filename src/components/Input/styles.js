import styled from 'styled-components'

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.primary1};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-family: ${({ theme }) => theme.fonts.comicSans};
  font-size: 16px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary1};
  opacity: 0.5;
  transition: opacity 250ms ease-in-out;

  flex-grow: ${({ flexGrow }) => flexGrow};
  width: ${({ width }) => width};
  max-width: 560px;

  &:focus {
    outline: none;
    opacity: 1;
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.primary1};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.primary1};
  }
  ::-moz-placeholder {
    color: ${({ theme }) => theme.colors.primary1};
  }
  :-moz-placeholder {
    color: ${({ theme }) => theme.colors.primary1};
  }
`

export { StyledInput }

import styled from 'styled-components'

const Input = styled.input`
  color: ${({ theme }) => theme.colors.primary1};
  padding: 10px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.comicSans};
  font-size: 16px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary1};
  opacity: 0.5;
  transition: opacity 250ms ease-in-out;

  flex-grow: 1;
  width: 100%;
  max-width: 580px;

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

export { Input }

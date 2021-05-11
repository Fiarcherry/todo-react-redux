import styled from 'styled-components'

const Input = styled.input`
  color: rgb(150, 150, 220);
  margin: 5px;
  padding: 3px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid rgba(150, 150, 220, 1);
  opacity: 0.5;
  transition: opacity 250ms ease-in-out;

  &:focus {
    outline: none;
    opacity: 1;
  }

  ::-webkit-input-placeholder {
    color: rgb(150, 150, 220);
  }
  :-ms-input-placeholder {
    color: rgb(150, 150, 220);
  }
  ::-moz-placeholder {
    color: rgb(150, 150, 220);
  }
  :-moz-placeholder {
    color: rgb(150, 150, 220);
  }
`

export { Input }

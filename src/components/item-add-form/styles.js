import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-grow: 1;
  max-width: 580px;
`

const Button = styled.button`
  color: #9696dc;
  margin: 5px 0px;
  padding: 8px 30px;
  background-color: #e6e6fa;
  border: none;
  transition: 100ms ease-in-out;
  cursor: pointer;

  flex-grow: 1;

  &:hover {
    color: #f0f0ff;
    background-color: #bebef0;
  }
`

const Input = styled.input`
  color: #9696dc;
  margin: 5px;
  padding: 3px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #9696dc;
  opacity: 0.5;
  transition: opacity 250ms ease-in-out;

  flex-grow: 7;

  &:focus {
    outline: none;
    opacity: 1;
  }

  ::-webkit-input-placeholder {
    color: #9696dc;
  }
  :-ms-input-placeholder {
    color: #9696dc;
  }
  ::-moz-placeholder {
    color: #9696dc;
  }
  :-moz-placeholder {
    color: #9696dc;
  }
`

export { Container, Form, Button, Input }

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h1`
  color: rgb(150, 150, 220);
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 38px;
  margin-bottom: 0px;
`

const TodosLeft = styled.p`
  color: rgb(180, 180, 200);
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 50px;
`

export { Container, Header, TodosLeft }

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.ul`
  max-width: 800px;
  padding: 0px;

  flex-grow: 1;
`

const ListElement = styled.li`
  list-style: none;
`

export { Container, List, ListElement }

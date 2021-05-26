import React, { useState } from 'react'

import Container from '../common/Container'
import PopUp from '../PopUp/PopUp'
import Button from '../common/Button'
import Input from '../common/Input'
import Space from '../common/Space/Space'
import Title from '../Title'

const ThemeChanger = () => {
  const [popUpActive, setPopUpActive] = useState(false)

  const inputStyles = { margin: '8px 10px', padding: '2px 5px', width: '100%' }

  return (
    <Container>
      <Button title="Сменить тему" onClick={() => setPopUpActive(true)} />
      <PopUp active={popUpActive} setActive={setPopUpActive}>
        <Container>
          <Title text="Color Pallette" />
        </Container>
        <Space />
        <Container flexDirection="column" alignItems="center">
          <Input placeholder="Primary 1" styles={inputStyles} />
          <Input placeholder="Primary 2" styles={inputStyles} />
          <Input placeholder="Primary 3" styles={inputStyles} />
          <Input placeholder="Primary 4" styles={inputStyles} />
          <Input placeholder="Primary 5" styles={inputStyles} />
        </Container>
        <Space />
        <Container justifyContent="space-around">
          <Button title="Confirm" />
          <Button title="Cancel" />
        </Container>
      </PopUp>
    </Container>
  )
}

export default ThemeChanger

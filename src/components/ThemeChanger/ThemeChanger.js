import React, { useEffect, useState } from 'react'

import Container from '../common/Container'
import PopUp from '../PopUp/PopUp'
import Button from '../common/Button'
import Input from '../common/Input'
import Space from '../common/Space/Space'
import Title from '../Title'

import { setTheme } from '../../handlers/themeHandler'

const ThemeChanger = () => {
import fonts from '../../Themes/fonts'

  const [popUpActive, setPopUpActive] = useState(false)
  const [newColors, setNewColors] = useState({
    primary1: '',
    primary2: '',
    primary3: '',
    primary4: '',
    primary5: '',
  })

  const onPrimaryChange = (e, key) => {
    setNewColors({ ...newColors, [key]: e.target.value })
  }

  useEffect(() => {
    //console.log(newColors)
  }, [newColors])

  const onSubmit = () => {
    setTheme(newColors)
    const newValue = { colors: newColors, fonts: fonts.comicSans }

  }

  const onCancel = () => {
    //console.log('click')
    setPopUpActive(false)
  }

  const inputStyles = { margin: '8px auto', padding: '2px 5px' }

  return (
    <Container>
      <Button title="Сменить тему" onClick={() => setPopUpActive(true)} />
      <PopUp active={popUpActive} setActive={setPopUpActive}>
        <Container>
          <Title text="Color Pallette" />
        </Container>
        <Space />
        <Container flexDirection="column">
          <Input
            placeholder="Primary 1"
            styles={inputStyles}
            onChange={(e) => onPrimaryChange(e, 'primary1')}
          />
          <Input
            placeholder="Primary 2"
            styles={inputStyles}
            onChange={(e) => onPrimaryChange(e, 'primary2')}
          />
          <Input
            placeholder="Primary 3"
            styles={inputStyles}
            onChange={(e) => onPrimaryChange(e, 'primary3')}
          />
          <Input
            placeholder="Primary 4"
            styles={inputStyles}
            onChange={(e) => onPrimaryChange(e, 'primary4')}
          />
          <Input
            placeholder="Primary 5"
            styles={inputStyles}
            onChange={(e) => onPrimaryChange(e, 'primary5')}
          />
        </Container>
        <Space />
        <Container justifyContent="space-around">
          <Button title="Confirm" onClick={onSubmit} />
          <Button title="Cancel" onClick={onCancel} />
        </Container>
      </PopUp>
    </Container>
  )
}

export default ThemeChanger

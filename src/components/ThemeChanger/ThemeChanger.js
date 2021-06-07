import React, { useCallback, useMemo, useState } from 'react'

import Container from '../common/Container'
import PopUp from '../PopUp/PopUp'
import Button from '../common/Button'
import Input from '../common/Input'
import Space from '../common/Space/Space'
import Title from '../Title'

import { setTheme } from '../../handlers/themeHandler'

import fonts from '../../utils/Theme/fonts'
import _ from 'lodash'
import { actionSetTheme } from '../../redux/actions/themeActions'
import { connect } from 'react-redux'
import ThemeSelector from '../ThemeSelector/ThemeSelector'

const ThemeChanger = ({ theme, dispatchSetTheme }) => {
  const InitialState = useMemo(
    () => ({
      name: 'custom',
      primary1: theme.colors.primary1,
      primary2: theme.colors.primary2,
      primary3: theme.colors.primary3,
      primary4: theme.colors.primary4,
      primary5: theme.colors.primary5,
    }),
    [theme.colors]
  )

  const [popUpActive, setPopUpActive] = useState(false)
  const [newColors, setNewColors] = useState(InitialState)
  const [prevColors, setPrevColors] = useState(InitialState)

  const onPrimaryChange = (e, key) => {
    setNewColors({ ...newColors, [key]: e.target.value })
  }

  const onThemeChange = useCallback(() => {
    setNewColors(InitialState)
  }, [setNewColors, InitialState])

  const handleOpen = () => {
    setPrevColors(InitialState)

    setPopUpActive(true)
  }

  const handleSubmit = () => {
    dispatchSetTheme(newColors)

    setPopUpActive(false)
  }

  const handleCancel = () => {
    dispatchSetTheme(prevColors)

    setPopUpActive(false)
  }

  const inputStyles = { margin: '8px auto', padding: '2px 5px' }

  const inputsArray = Object.keys(newColors).filter((name) =>
    name.includes('primary')
  )

  const inputElements = inputsArray.map((item, index) => {
    const placeholder = `${_.join(
      _.slice(_.capitalize(item), 0, item.length - 1),
      ''
    )} ${_.last(item)}`
    return (
      <Input
        key={index}
        placeholder={placeholder}
        value={newColors[item]}
        styles={inputStyles}
        onChange={(e) => onPrimaryChange(e, item)}
      />
    )
  })

  return (
    <Container>
      <Button title="Сменить тему" onClick={handleOpen} />
      <PopUp active={popUpActive} setActive={setPopUpActive}>
        <Container>
          <Title text="Themes" />
        </Container>
        <Space />
        <ThemeSelector onThemeChange={onThemeChange} />
        <Space />
        <Container>
          <Title text="Color Pallette" />
        </Container>
        <Container flexDirection="column">{inputElements}</Container>
        <Space />
        <Container justifyContent="space-around">
          <Button title="Confirm" onClick={handleSubmit} />
          <Button title="Cancel" onClick={handleCancel} />
        </Container>
      </PopUp>
    </Container>
  )
}

const mapStateToProps = ({ theme }) => ({ theme })

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetTheme: (value) => {
      for (const key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
          if (value[key] === '') value[key] = '#000'
        }
      }
      const newValue = { colors: value, fonts: fonts.comicSans }
      dispatch(actionSetTheme(newValue))
      setTheme(newValue)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChanger)

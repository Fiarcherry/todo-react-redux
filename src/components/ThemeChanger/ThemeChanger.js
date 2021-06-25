import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux'

import { SketchPicker } from 'react-color'
import ThemeSelector from '../ThemeSelector/ThemeSelector'
import Container from '../common/Container'
import PopUp from '../PopUp/PopUp'
import Button from '../common/Button'
import Input from '../common/Input'
import Space from '../common/Space/Space'
import Title from '../Title'

import { setTheme } from '../../handlers/themeHandler'
import { actionSetTheme } from '../../redux/actions/themeActions'

import fonts from '../../utils/Theme/fonts'

import startCase from 'lodash/startCase'

const ThemeChanger = ({ theme, dispatchSetTheme, saveSetTheme }) => {
  const [popUpActive, setPopUpActive] = useState(false)
  const [prevColors, setPrevColors] = useState(theme.colors)
  const [newColors, setNewColors] = useState(theme.colors)
  const [primaryFocus, setPrimaryFocus] = useState('')
  const [colorPicker, setColorPicker] = useState('#fff')

  const handleFocus = useCallback(
    (e) => {
      if (popUpActive) {
        setPrimaryFocus(e.target.name)
        setColorPicker(e.target.value)
      }
    },
    [popUpActive]
  )

  const handleInputChange = useCallback(
    (e) => {
      const key = e.target.name
      const value = e.target.value

      if (key !== '') {
        setNewColors({ ...newColors, name: 'custom', [key]: value })
      }
    },
    [newColors]
  )

  const handleColorPickerChange = useCallback(
    (e) => {
      const color = e.hex

      if (colorPicker !== color) {
        setColorPicker(color)
      }
      if (primaryFocus !== '') {
        setNewColors({ ...newColors, name: 'custom', [primaryFocus]: color })
      }
    },
    [colorPicker, newColors, primaryFocus]
  )

  useEffect(() => {
    setNewColors(theme.colors)
  }, [theme.colors])

  useEffect(() => {
    setNewColors(newColors)
    dispatchSetTheme(newColors)
  }, [newColors, dispatchSetTheme])

  useEffect(() => {
    setPrimaryFocus(primaryFocus)
  }, [primaryFocus])

  useEffect(() => {
    setColorPicker(colorPicker)
  }, [colorPicker])

  const handleOpen = useCallback(() => {
    setPrevColors(theme.colors)

    setPrimaryFocus('')

    setPopUpActive(true)
  }, [theme.colors])

  const handleClose = useCallback(
    (colors) => {
      if (prevColors !== colors) {
        saveSetTheme(colors)
      }

      if (theme.colors !== colors) {
        dispatchSetTheme(colors)
      }

      setPopUpActive(false)
    },
    [theme.colors, prevColors, dispatchSetTheme, saveSetTheme]
  )

  const inputsArray = Object.keys(newColors).filter((name) =>
    name.includes('primary')
  )

  const inputStyles = useMemo(
    () => ({ margin: '8px auto', padding: '2px 5px' }),
    []
  )

  const inputElements = inputsArray.map((item, index) => {
    const placeholder = startCase(item)
    return (
      <Input
        key={index}
        name={item}
        autoFocus={index === 0 ? true : false}
        onFocus={handleFocus}
        placeholder={placeholder}
        value={newColors[item]}
        color={newColors[item]}
        styles={inputStyles}
        onChange={handleInputChange}
      />
    )
  })

  const containerInputsStyles = useMemo(() => ({ flexDirection: 'column' }), [])

  const containerButtonsStyles = useMemo(
    () => ({ justifyContent: 'space-around' }),
    []
  )

  return (
    <Container>
      <Button title="Сменить тему" onClick={handleOpen} />
      <PopUp
        active={popUpActive}
        setActive={setPopUpActive}
        prevColors={prevColors}
        handleClose={handleClose}
      >
        <Title text="Themes" />
        <ThemeSelector />
        <Title text="Color Pallette" />
        <Container>
          <Container styles={containerInputsStyles}>{inputElements}</Container>
          <Space />
          <SketchPicker
            color={colorPicker}
            onChange={handleColorPickerChange}
          />
        </Container>
        <Space />
        <Container styles={containerButtonsStyles}>
          <Button title="Confirm" onClick={() => handleClose(newColors)} />
          <Button title="Cancel" onClick={() => handleClose(prevColors)} />
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
    },
    saveSetTheme: (value) => {
      for (const key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
          if (value[key] === '') value[key] = '#000'
        }
      }
      const newValue = { colors: value, fonts: fonts.comicSans }
      setTheme(newValue)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChanger)

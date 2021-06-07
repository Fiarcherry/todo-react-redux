import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Button from '../common/Button'
import Container from '../common/Container'

import { getColors, setTheme } from '../../handlers/themeHandler'
import { actionSetTheme } from '../../redux/actions/themeActions'

import colors from '../../utils/Theme/colors'
import fonts from '../../utils/Theme/fonts'

const ThemeSelector = ({ theme, dispatchSetTheme, onThemeChange }) => {
  const handleThemeChange = (item) => {
    dispatchSetTheme(item)
  }

  useEffect(() => {
    onThemeChange()
  }, [theme, onThemeChange])

  const elements = getColors().map((item, index) => {
    const isActive = theme.colors.name === item
    const title = _.capitalize(item)
    return (
      <Button
        key={index}
        isActive={isActive}
        title={title}
        onClick={() => isActive || handleThemeChange(item)}
      />
    )
  })

  return <Container justifyContent="center">{elements}</Container>
}

const mapStateToProps = ({ theme }) => ({ theme })

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetTheme: (value) => {
      const themes = getColors()
      const theme = themes.find((item) => item === value)
      if (theme) {
        const newValue = { colors: colors[value], fonts: fonts.comicSans }
        dispatch(actionSetTheme(newValue))
      }
      setTheme(value)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelector)

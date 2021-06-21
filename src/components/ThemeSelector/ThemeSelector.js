import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Button from '../common/Button'
import Container from '../common/Container'

import { getColors } from '../../handlers/themeHandler'
import { actionSetTheme } from '../../redux/actions/themeActions'

import colors from '../../utils/Theme/colors'
import fonts from '../../utils/Theme/fonts'

const ThemeSelector = ({ theme, dispatchSetTheme }) => {
  const elements = getColors().map((item, index) => {
    const isActive = theme.colors.name === item
    const title = _.capitalize(item)

    const handleOnClick = () => isActive || dispatchSetTheme(item)

    return (
      <Button
        key={index}
        isActive={isActive}
        title={title}
        onClick={handleOnClick}
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
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelector)

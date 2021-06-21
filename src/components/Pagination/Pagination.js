import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import Container from '../common/Container'

import {
  actionDecPage,
  actionIncPage,
  actionSetPage,
} from '../../redux/actions/pageActions'
import { selectPagesCount } from '../../redux/selectors/todosSelectors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledArrow, StyledPage, StyledDivider } from './styles'

import _ from 'lodash'

const Pagination = ({
  pagesCount,
  active,
  dispatchSetPage,
  dispatchDecPage,
  dispatchIncPage,
}) => {
  const faArrowLeft = 'arrow-left'
  const faArrowRight = 'arrow-right'
  const faSize = 'lg'

  const pages = _.range(pagesCount)

  const canClickPagesCount = 1
  const middleFirstPage = active - canClickPagesCount
  const middleLastPage = active + canClickPagesCount
  const middlePagesCount = 1 + canClickPagesCount * 2
  const firstPage = 0
  const lastPage = pages.length - 1

  let elements = []

  const addPage = (page) => {
    elements.push(
      <StyledPage
        key={page}
        isActive={active === page}
        onClick={() => active === page || dispatchSetPage(page)}
      >
        {page + 1}
      </StyledPage>
    )
  }

  const addDivider = (condition) => {
    if (condition) {
      elements.push(<StyledDivider>...</StyledDivider>)
    }
  }

  addPage(firstPage)
  addDivider(middleFirstPage > firstPage + 1)
  for (let i = middleFirstPage; i < middleFirstPage + middlePagesCount; i++) {
    if (i > firstPage && i < lastPage) {
      addPage(pages[i])
    }
  }
  addDivider(middleLastPage < lastPage - 1)
  addPage(lastPage)

  // const elements = pages.map((item) => {
  //   const isActive = active === item
  //   return (
  //     <StyledPage
  //       key={item}
  //       isActive={isActive}
  //       onClick={() => isActive || dispatchSetPage(item)}
  //     >
  //       {item + 1}
  //     </StyledPage>
  //   )
  // })

  const isFirstPage = active > 0
  const isLastPage = active < pagesCount - 1

  const handleLeftArrow = useCallback(() => {
    dispatchDecPage()
  }, [dispatchDecPage])

  const handleRightArrow = useCallback(() => {
    dispatchIncPage()
  }, [dispatchIncPage])

  if (pages.length > 1) {
    return (
      <Container>
        <StyledArrow disabled={!isFirstPage} onClick={handleLeftArrow}>
          <FontAwesomeIcon icon={faArrowLeft} size={faSize} />
        </StyledArrow>
        {elements}
        <StyledArrow disabled={!isLastPage} onClick={handleRightArrow}>
          <FontAwesomeIcon icon={faArrowRight} size={faSize} />
        </StyledArrow>
      </Container>
    )
  }

  return ''
}

const mapStateToProps = (state) => ({
  pagesCount: selectPagesCount(state),
  active: state.page,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetPage: (value) => {
      dispatch(actionSetPage(value))
    },
    dispatchIncPage: (value) => {
      dispatch(actionIncPage(value))
    },
    dispatchDecPage: (value) => {
      dispatch(actionDecPage(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

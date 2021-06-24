import React, { useCallback, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'

import Container from '../common/Container'

import {
  actionDecPage,
  actionIncPage,
  actionSetPage,
} from '../../redux/actions/pageActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledArrow, StyledPage, StyledDivider } from './styles'

import _ from 'lodash'

const Pagination = ({
  active,
  pagesCount,
  dispatchSetPage,
  dispatchDecPage,
  dispatchIncPage,
}) => {
  const fa = useMemo(
    () => ({ arrowLeft: 'arrow-left', arrowRight: 'arrow-right', size: 'lg' }),
    []
  )

  const pages = useMemo(() => _.range(pagesCount), [pagesCount])

  const firstPage = 0
  const lastPage = useMemo(() => pagesCount - 1, [pagesCount])

  useEffect(() => {
    if (active > lastPage) {
      dispatchSetPage(lastPage)
    }
  }, [active, lastPage, dispatchSetPage])

  const canClickPagesCount = 1
  const middleFirstPage = useMemo(() => active - canClickPagesCount, [active])
  const middleLastPage = useMemo(() => active + canClickPagesCount, [active])
  const middlePagesCount = 1 + canClickPagesCount * 2

  let elements = []

  const addPage = (page) => {
    const isActive = active === page

    // const handleOnClick = () => dispatchSetPage(page)

    elements.push(
      <StyledPage
        key={page}
        isActive={isActive}
        onClick={() => dispatchSetPage(page)}
      >
        {page + 1}
      </StyledPage>
    )
  }

  const addDivider = (condition, key) => {
    if (condition) {
      elements.push(<StyledDivider key={key}>...</StyledDivider>)
    }
  }

  addPage(firstPage)
  addDivider(middleFirstPage > firstPage + 1, fa.arrowLeft)
  for (let i = middleFirstPage; i < middleFirstPage + middlePagesCount; i++) {
    if (i > firstPage && i < lastPage) {
      addPage(pages[i])
    }
  }
  addDivider(middleLastPage < lastPage - 1, fa.arrowRight)
  addPage(lastPage)

  const isFirstPage = useMemo(() => active > 0, [active])
  const isLastPage = useMemo(
    () => active < pagesCount - 1,
    [active, pagesCount]
  )

  const handleLeftArrow = useCallback(() => {
    dispatchDecPage()
  }, [dispatchDecPage])

  const handleRightArrow = useCallback(() => {
    dispatchIncPage()
  }, [dispatchIncPage])

  return (
    <Container>
      <StyledArrow disabled={!isFirstPage} onClick={handleLeftArrow}>
        <FontAwesomeIcon icon={fa.arrowLeft} size={fa.size} />
      </StyledArrow>
      {elements}
      <StyledArrow disabled={!isLastPage} onClick={handleRightArrow}>
        <FontAwesomeIcon icon={fa.arrowRight} size={fa.size} />
      </StyledArrow>
    </Container>
  )
}

const mapStateToProps = ({ page }) => ({
  active: page,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Pagination))

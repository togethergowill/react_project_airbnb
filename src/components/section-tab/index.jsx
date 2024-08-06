import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { SectionTabWrapper } from './style'
import ScrollXView from '@/base-ui/scrollX-view'

const SetctionTab = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { tabNames, tabClick } = props

  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)

  }
  return (
    <SectionTabWrapper>
      <ScrollXView>
        {
          tabNames.map((item, index) => {
            return <div
              key={item}
              className={classNames("name", { active: currentIndex === index })}
              onClick={e => itemClickHandle(index, item)}
            >{item}</div>
          })
        }
      </ScrollXView>
    </SectionTabWrapper>
  )
})

SetctionTab.propTypes = {
  tabNames: PropTypes.array
}

export default SetctionTab
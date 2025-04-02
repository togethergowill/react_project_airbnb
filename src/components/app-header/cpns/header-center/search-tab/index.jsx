import React, { memo, useState } from 'react'
import { SearchTabWrapper } from './style'
import classNames from 'classnames'

const SearchTab = memo((props) => {
  const { titles, tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }
  return (
    <SearchTabWrapper>
      {
        titles.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: index === currentIndex })}
              key={index}
              onClick={e => itemClickHandle(index)}
            >
              <span className="text">{item}</span>
              <div className="bottom"></div>
            </div>
          )
        })

      }
    </SearchTabWrapper>
  )
})

export default SearchTab
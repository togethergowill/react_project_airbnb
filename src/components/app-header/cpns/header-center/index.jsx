import React, { memo, useState } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon_serach_bar'
import SearchTab from './search-tab'
import SearchTitles from '@/assets/data/search_titles'
import SearchSection from './search-section'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props

  const [tabIndex, setTabIndex] = useState(0)

  const titles = SearchTitles.map(item => item.title)
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClick} >
          <div className="text">
            搜索房源和体验
          </div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTab titles={titles}
            tabClick={setTabIndex}
          />
          <div className="infos">
            <SearchSection
              searchInfos={SearchTitles[tabIndex].searchInfos}
            />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter



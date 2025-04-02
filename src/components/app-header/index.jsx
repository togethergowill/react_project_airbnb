import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './cpns/header-left'
import HeaderCenter from './cpns/header-center'
import HeaderRight from './cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)

  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed, topAlpha } = headerConfig
  // 1. 搜索框的展示和隐藏逻辑
  // 监听页面的滚动
  const { scrollY } = useScrollPosition()

  const prevY = useRef(0)

  // 正常情况下（搜索框没有弹出来），不断记录当前的scrollY值
  if (!isSearch) prevY.current = scrollY

  // 在弹出搜索框的情况下，滚动的距离大于之前记录距离的30，关闭搜索框
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={e => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch &&
          <div className='cover'
            onClick={e => setIsSearch(false )}  
          ></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
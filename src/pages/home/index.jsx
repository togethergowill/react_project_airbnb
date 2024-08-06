import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import { isEmptyObj } from '@/utils'
import { fetchHomDataAction } from '@/store/modules/home'
import HomeBanner from './cpns/home-banner'
import HomeSectionV1 from './cpns/home-section-v1'
import HomeSectionV2 from './cpns/home-section-v2'
import HomeSectionV3 from './cpns/home-section-v3'
import HomeSectionV4 from './cpns/home-section-v4'

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    hotRecInfo,
    disCountInfo,
    longforInfo,
    plusInfo
  } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    hotRecInfo: state.home.hotRecInfo,
    disCountInfo: state.home.disCountInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomDataAction())
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="home-content">
        {isEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyObj(disCountInfo) && <HomeSectionV2 infoData={disCountInfo} />}
        {isEmptyObj(hotRecInfo) && <HomeSectionV2 infoData={hotRecInfo} />}
        {isEmptyObj(plusInfo) && <HomeSectionV4 infoData={plusInfo} />}
        {isEmptyObj(longforInfo) && <HomeSectionV3 infoData={longforInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
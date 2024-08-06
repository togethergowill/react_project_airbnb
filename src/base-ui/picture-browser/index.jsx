import React, { memo, useState } from 'react'
import { PicBrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleArrowBottom from '@/assets/svg/icon_triangle_arro_bottom'
import IconTriangleArrowTop from '@/assets/svg/icon_triangle_arrow_top'


const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showList, setShowList] = useState(true)

  const [isNext, setIsNext] = useState(true)

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function bottomItemClickHandle(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }
  return (
    <PicBrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn left" onClick={e => controlClickHandle()}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>

      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}:</span>
              <span>room apartmentt图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {
                showList ?
                  <IconTriangleArrowBottom />
                  : <IconTriangleArrowTop />
              }
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div
                      className={classNames("item", { active: currentIndex === index })}
                      key={item}
                      onClick={e => bottomItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }

            </Indicator>
          </div>

        </div>

      </div>
    </PicBrowserWrapper>
  )
})

export default PictureBrowser
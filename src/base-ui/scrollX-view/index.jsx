import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollXViewWapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'
import BtnWapper from '@/hooks/btn-bgc'

const ScrollXView = memo((props) => {
  const { left = 0, right = 0 } = props
  const [posIndex, setPosIndex] = useState(0)
  const [isShowRight, setIsShowRight] = useState(true)
  const [isShowLeft, setIsShowLeft] = useState(false)
  const scrollElRef = useRef()
  const limitDistanceRef = useRef()

  // 1. 组件首次渲染时，需要判断右侧按钮是否需要渲染
  useEffect(() => {
    const scrollWidth = scrollElRef.current.scrollWidth

    const clientWitdh = scrollElRef.current.clientWidth

    limitDistanceRef.current = scrollWidth - clientWitdh

    setIsShowRight(limitDistanceRef.current > 0)

  }, [props.children])

  function controlClickHandle(isRight = true) {
    let newIndex = isRight ? posIndex + 1 : posIndex - 1
    setPosIndex(newIndex)
    const currentElRef = scrollElRef.current.children[newIndex]
    const moveDistance = currentElRef.offsetLeft
    scrollElRef.current.style.transform = `translateX(-${moveDistance}px)`

    setIsShowRight(limitDistanceRef.current - moveDistance > 0)
    setIsShowLeft(moveDistance > 0)
  }
  return (
    <ScrollXViewWapper left={left} right={right}>
      {
        isShowLeft &&
        <div
          className='left control'
          onClick={e => controlClickHandle(false)}>
          <BtnWapper icon={<IconArrowLeft />} />
        </div>
      }
      {
        isShowRight &&
        <div
          className='right control'
          onClick={e => controlClickHandle(true)}>
          <BtnWapper icon={<IconArrowRight />} />
        </div>
      }
      <div className="scroll">
        <div className="scroll-inner" ref={scrollElRef} >
          {props.children}
        </div>
      </div>
    </ScrollXViewWapper>
  )
})

export default ScrollXView
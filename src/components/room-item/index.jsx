import React, { memo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { RoomItemWrapper } from './style'
import Rating from '@mui/material/Rating';

import { Carousel } from "antd"
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)

  const sliderRef = useRef()
  function btnClickHandle(isNext = true, event) {
    isNext ? sliderRef.current.next() : sliderRef.current.prev()

    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0

    setSelectIndex(newIndex)
    event.stopPropagation()
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }

  const coverImg = (
    <div className="cover">
      <img src={itemData.picture_url} className="img" alt='' />
    </div>
  )
  const coverCarousel = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={e => btnClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={e => btnClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className='item' key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} className='img' alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )


  return (
    <RoomItemWrapper
      itemwidth={itemWidth}
      textColor={itemData.verify_info.text_color || "#39576a"}
      starRatingColor={itemData.star_rating_color}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData.picture_urls ? coverCarousel : coverImg}
        <div className="desc">{itemData.verify_info.messages.join('·')}</div>
        <div className="title two-line-ellipsis">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="footer">
          <div className="rate">
            {
              itemData.star_rating &&
              <Rating
                name="half-rating-read"
                defaultValue={itemData.star_rating}
                precision={0.1}
                readOnly />
            }
          </div>
          <div className="comment">{itemData.bottom_info?.content}</div>
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}



export default RoomItem
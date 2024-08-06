import React, { memo, useCallback } from 'react'
import { EntirePaginationWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntirePagination = memo(() => {

  const { totalCount, roomList } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }))

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  }, [navigate, dispatch])
  return (
    <EntirePaginationWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {
          roomList.map((item) => {
            return <RoomItem
              key={item._id}
              itemData={item}
              itemWidth='20%'
              itemClick={itemClickHandle}
            />

          })
        }
      </div>
    </EntirePaginationWrapper>

  )
})

export default EntirePagination
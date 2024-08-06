import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './section-filter'
import EntireRoomList from './section-rooms'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import EntirePagination from './section-pagination'

const Entire = memo(() => {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(fetchRoomListAction())
  }, [dispath])
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRoomList />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
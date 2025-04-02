import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './section-filter'
import EntireRoomList from './section-rooms'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import EntirePagination from './section-pagination'
import { changeHeaderConfigAction } from '@/store/modules/mian'

const Entire = memo(() => {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(fetchRoomListAction())
    dispath(changeHeaderConfigAction({
      isFixed: true, topAlpha: false
    }))
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
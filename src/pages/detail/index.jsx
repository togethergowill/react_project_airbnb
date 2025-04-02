import React, { memo, useEffect } from 'react'

import { DetailWrapper } from './style'
import DetailPictures from './detail-pictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/mian'

const Detail = memo(() => {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(changeHeaderConfigAction({
      isFixed: false, topAlpha: false
    }))
  })
  return (
    <DetailWrapper>
      <DetailPictures />
    </DetailWrapper>
  )
})

export default Detail
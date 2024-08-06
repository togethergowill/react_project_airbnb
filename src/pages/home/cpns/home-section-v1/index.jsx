import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import propTypes from 'prop-types'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'



const HomeSetionV1 = memo((props) => {
  const { infoData, title } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms 
       list={infoData.list}
       itemWidth="25%" />
      <SectionFooter title={title} />
    </SectionV1Wrapper>
  )
})

HomeSetionV1.propTypes = {
  infoData: propTypes.object,
  title: propTypes.string
}

export default HomeSetionV1
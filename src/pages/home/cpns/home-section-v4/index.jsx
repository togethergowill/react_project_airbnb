import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV4Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import ScrollXView from '@/base-ui/scrollX-view'
import RoomItem from '@/components/room-item'

const HomeSectionV4 = memo((props) => {
  const { title, subtitle, list } = props.infoData
  return (
    <SectionV4Wrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <ScrollXView left={8} right={8}>
        {
          list.map(item => {
            return <RoomItem itemWidth="20%" itemData={item} key={item.id} />
          })
        }
      </ScrollXView>
      <SectionFooter title="plus" />
    </SectionV4Wrapper>
  )
})

HomeSectionV4.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV4
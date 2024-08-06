import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SRoomsWrapper } from './style'

import RoomItem from '@/components/room-item'
const SectionRooms = memo((props) => {
  const { list, itemWidth } = props
  return (
    <SRoomsWrapper>
      {
        list.slice(0, 8).map(item => {
          return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
        })
      }
    </SRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  list: PropTypes.array
}

export default SectionRooms
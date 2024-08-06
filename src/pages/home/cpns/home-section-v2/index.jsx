import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SetctionTab from '@/components/section-tab'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData?.dest_address.map(item => item.name)

  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} />
      <SetctionTab tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms list={infoData.dest_list?.[name]} itemWidth="33.333%" />
      <SectionFooter title={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}


export default HomeSectionV2
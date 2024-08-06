import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollXView from '@/base-ui/scrollX-view'
import LongforItem from '@/components/longfor-item'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { title, subtitle, list = [] } = props.infoData
  return (
    <SectionV3Wrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="longfor">
        <ScrollXView left={8} right={8}>
          {
            list.map(item => {
              return <LongforItem key={item.picture_url} itemData={item} />
            })
          }
        </ScrollXView>
      </div>
      <SectionFooter/>

    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3
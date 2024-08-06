import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'
import { useNavigate } from 'react-router-dom'


const SectionFooter = memo((props) => {
  const { title } = props

  let showMessage = "显示全部"
  if (title) {
    showMessage = `显示更多${title}房源`
  }

  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <SFooterWrapper color={title ? "#00848A" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow />
      </div>
    </SFooterWrapper>
  )
})

SectionFooter.propTypes = {
  title: PropTypes.string
}

export default SectionFooter
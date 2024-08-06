import React, { memo } from 'react'
import { LeftWrapper } from './style'
import LogoIcon from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <LogoIcon />
    </LeftWrapper>
  )
})

export default HeaderLeft
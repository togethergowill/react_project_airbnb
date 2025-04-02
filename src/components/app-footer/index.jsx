import React, { memo } from 'react'
import { AppFooterWrapper } from './style'
import footerData from '@/assets/data/footer.json'

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="wrapper">
        {
          footerData.map((item) => {
            return (
              <ul className="item" key={item}><span className="title">{item.name}</span>
                {
                  item.list.map((liItem, index) => {
                    return (
                      <li
                        key={index}
                        className='li_item'>
                        <span>{liItem}</span>
                      </li>
                    )
                  })
                }
              </ul>
            )
          })
        }
      </div>
      <h4 className="secure">© 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</h4>
    </AppFooterWrapper>
  )
})

export default AppFooter
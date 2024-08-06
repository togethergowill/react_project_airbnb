import React, { memo, useEffect, useState } from 'react'
import { EntireFilterWrapper } from './style'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])
  const [selectNames, setSelectNames] = useState([])
  function itemClickHandle(name) {
    const newNames = [...selectNames]
    if (newNames.includes(name)) {
      const nameIndex = newNames.findIndex(item => item === name)
      newNames.splice(nameIndex, 1)
      console.log(nameIndex, newNames)
    } else {
      newNames.push(name)
    }

    setSelectNames(newNames)
  }
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return <div
              className={classNames('item', { active: selectNames.includes(item) })}
              key={item}
              onClick={e => itemClickHandle(item)}
            >{item}</div>
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})

export default EntireFilter
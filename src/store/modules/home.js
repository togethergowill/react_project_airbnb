import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  getHomeDiscountRoomsData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecPlaceData,
  getHomeLongforPlacesData,
  getHomePlusPlacesData,
} from "@/services"

export const fetchHomDataAction = createAsyncThunk(
  "fetchHomeData",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getHomeHotRecPlaceData().then(res => {
      dispatch(changehotRecInfoAction(res))
    })
    getHomeDiscountRoomsData().then(res => {
      dispatch(changeDiscountInfoAction(res))
    })
    getHomeLongforPlacesData().then(res => {
      dispatch(changeLongforInfoAction(res))
    })
    getHomePlusPlacesData().then(res => {
      dispatch(changePlusInfoAction(res))
    })
  }
)
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    hotRecInfo: {},
    disCountInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changehotRecInfoAction(state, { payload }) {
      state.hotRecInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.disCountInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    },
  },
})
const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changehotRecInfoAction,
  changeDiscountInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions
export default homeSlice.reducer

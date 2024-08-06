import lyRequestInstance from "../request"

export function getHomeGoodPriceData() {
  return lyRequestInstance.get({
    url: "/home/goodprice",
  })
}

export function getHomeHighScoreData() {
  return lyRequestInstance.get({
    url: "/home/highscore",
  })
}

export function getHomeHotRecPlaceData() {
  return lyRequestInstance.get({
    url: "/home/hotrecommenddest",
  })
}

export function getHomeDiscountRoomsData() {
  return lyRequestInstance.get({
    url: "/home/discount",
  })
}

export function getHomeLongforPlacesData() {
  return lyRequestInstance.get({
    url: "/home/longfor",
  })
}

export function getHomePlusPlacesData() {
  return lyRequestInstance.get({
    url: "/home/plus",
  })
}

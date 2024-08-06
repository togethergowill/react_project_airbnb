import lyRequestInstance from "../request"

export function getEntireRoomList(offset = 0, size = 20) {
  return lyRequestInstance.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  })
}

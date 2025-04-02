import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function useScrollTop() {
  const loaction = useLocation()
  // 当路由路径发生变化，window滚动到顶部
  useEffect(() => {
    window.screenTop(0, 0)
  }, [loaction.pathname])
}

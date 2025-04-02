import { memo } from "react";
import { BtnWapper } from "./style";
export default memo((props) => {
  const { icon } = props
  return (
    <BtnWapper>
      {icon}
    </BtnWapper>
  )
})
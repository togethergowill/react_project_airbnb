import { memo } from "react";
import { BtnWapper } from "./style";

export function changeBtnBgdHook(Cpn) {
  return memo(() => {
    return (
      <BtnWapper>
        <Cpn/>
      </BtnWapper>
    )
  })
}
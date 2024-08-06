import styled from "styled-components"

export const EntireFilterWrapper = styled.div`
  position: fixed;
  z-index: 8;
  top: 80px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  padding-left: 68px;

  .filter {
    display: flex;

    .item {
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      cursor: pointer;

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #ffffff;
      }
    }
  }
`

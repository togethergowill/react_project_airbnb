import styled from "styled-components"

export const ScrollXViewWapper = styled.div`
  position: relative;
  padding: 8px 0px;

  > button {
    margin-left: 20px;
  }
  .scroll {
    overflow: hidden;

    .scroll-inner {
      display: flex;
      transition: transform 200ms ease-out;
    }
  }
  .left {
    left: ${props => props.left}px;
    transform: translate(-50%, -50%);
  }
  .control {
    position: absolute;
    z-index: 9;
    top: 50%;
  }

  .right {
    right: ${props => props.right}px;
    transform: translate(50%, -50%);
  }
`

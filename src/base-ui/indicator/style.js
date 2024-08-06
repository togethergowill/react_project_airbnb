import styled from "styled-components"

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    position: relative;
    transition: all 200ms ease-out;

    > * {
      flex-shrink: 0;
    }
  }
`

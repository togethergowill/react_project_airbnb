import styled from "styled-components"

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;

  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    .text {
      color: ${props => props.theme.text.secondaryColor};
      padding: 0 16px;
      font-weight: 700;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      color: #fff;
      border-radius: 50%;
      background-color: ${props=>props.theme.color.primaryColor};
    }
  }
`

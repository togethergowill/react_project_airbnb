import styled from "styled-components"

export const AppFooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #eee;

  .wrapper {
    display: flex;
    justify-content: space-between;
    padding: 48px 24px;
    box-sizing: border-box;
    margin: 0 auto;
    width: 1080px;
  }

  .item {
    flex: 1;
    .title {
      font-weight: 600;
      color: #484848;
      margin-bottom: 16px;
    }

    .li_item {
      color: #767676;
      margin-top: 6px;
    }
  }
  .secure {
    margin-top: 30px;
    border-top: 1px solid #ebebeb;
    padding: 20px;
    color: #767676;
    text-align: center;
  }
`

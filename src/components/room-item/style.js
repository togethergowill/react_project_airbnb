import styled from "styled-components"

export const RoomItemWrapper = styled.div`
  width: ${props => props.itemwidth};
  flex-shrink: 0;
  padding: 8px;
  box-sizing: border-box;

  .inner {
    .cover {
      position: relative;
      padding: 66.66% 8px 0px;

      .img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        object-fit: cover;
      }
    }

    .desc {
      color: ${props => props.textColor};
      font-size: 12px;
      margin: 10px 0 5px;
      font-weight: 700;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      height: 37px;
    }

    .price {
      margin: 8px 0;
    }

    .footer {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: ${props => props.theme.text.primaryColor};

      .rate {
        display: flex;
        align-items: center;
        margin-right: 5px;

        .MuiRating-root {
          color: ${props => props.starRatingColor};
          font-size: 12px;
        }
      }
    }
  }

  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      display: none;
      align-items: center;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );

        &.right {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }
    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;

        .dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          background: #fff;
          border-radius: 50%;
          transition: all 200ms ease-out;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
`

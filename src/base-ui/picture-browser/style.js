import styled from "styled-components"

export const PicBrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;
      padding: 0 40px;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      .pic-enter {
        transform: translateX(${props => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      color: #fff;
      max-width: 105vh;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }
      .list {
        height: 67px;
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${props => props.showList ? "67px": "0"};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            width: 100%;
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`

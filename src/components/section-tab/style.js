import styled from "styled-components"

export const SectionTabWrapper = styled.div`

  .name {
    flex-shrink: 0;
    flex-basis: 120px;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 1px solid #d8d8dd;
    white-space: nowrap;
    cursor: pointer;
    transition: box-shadow 200ms ease-out;

    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
  }
  .active {
    color: #fff;
    background-color: ${props => props.theme.color.secondaryColor};
  }
`

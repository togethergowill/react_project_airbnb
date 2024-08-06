import styled from "styled-components"

export const SHeaderWrapper = styled.div`
  color: ${props => props.theme.text.secondaryColor};

  .title {
    margin-bottom: 16px;
  }

  .subtitle {
    color: #222;
    font-size: 16px;
    margin-bottom: 20px;
  }
`

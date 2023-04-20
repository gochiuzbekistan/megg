import styled from "styled-components";

const AppStyled = styled.div`
  @font-face {
    font-family: chino;
    src: url("./chino.ttf");
  }

  @font-face {
    font-family: nuni;
    src: url("./nuni.ttf");
  }

  --pink-bg: #7d2b39cd;
  --pink-color: #ffd0d8;
  --pink-border-color: #b981af;

  background: #521212;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: nuni;

  .info-card {
    background: var(--pink-bg);
    color: var(--pink-color);
    border: 3px solid var(--pink-border-color);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    backdrop-filter: blur(5px);
  }

  footer {
    width: 100%;
    padding: 20px;
    position: relative;
    text-align: center;
    font-size: 16px;

    &.info-card {
      display: block;
      border-bottom: none;
      border-right: none;
      border-left: none;
      border-radius: 0;

      a {
        color: pink;
        text-decoration: none;
        font-size: inherit;
      }
    }
  }
`;

export default AppStyled;

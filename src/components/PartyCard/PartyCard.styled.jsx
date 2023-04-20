import styled from "styled-components";

const PartyCardStyled = styled.div`
  width: fit-content;
  padding: 3px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  .background {
    background: conic-gradient(
      hsl(0, 100%, 50%),
      hsl(60, 100%, 50%),
      hsl(120, 100%, 50%),
      hsl(180, 100%, 50%),
      hsl(240, 100%, 50%),
      hsl(300, 100%, 50%),
      hsl(360, 100%, 50%)
    );
    position: absolute;
    width: 600px;
    height: 600px;
    animation: rotate 1s linear infinite;
  }

  .content {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }

  h2 {
    background: #a9243c;
    color: #f9e2ff;
    font-size: 40px;
    padding: 20px;
    border-radius: 10px;
    position: relative;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default PartyCardStyled;

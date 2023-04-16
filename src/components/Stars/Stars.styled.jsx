import styled from "styled-components";

const StarsStyled = styled.div`
  background: #e5c6e5;

  position: relative;

  .star {
    position: absolute;
    top: var(--top);
    left: var(--left);
    animation: anime 1s var(--delay) 1 forwards;
    transform: scale(0);
    display: grid;
    place-items: center;
    pointer-events: none;

    svg {
      width: 30px;
      height: 30px;
      animation: rotate 1s linear infinite;

      path {
        fill: gold;
      }
    }
  }

  @keyframes anime {
    from,
    to {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }
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

export default StarsStyled;

import styled from "styled-components";

const CardsStyled = styled.div`
  position: relative;
  width: 300px;
  height: 440px;
  margin: 50px 0;

  a {
    position: absolute;
    inset: 0;
  }

  .image {
    position: absolute;
    pointer-events: none;
  }

  .large {
    transition: transform 0.33s;
    border-radius: 10px;

    :nth-child(1) {
      transform: translate(-7%) rotate(-5deg);
    }
    :nth-child(3) {
      transform: translate(-5%) rotate(-3deg);
    }
    :nth-child(4) {
      transform: translate(-2%) rotate(3deg);
    }
    :nth-child(6) {
      transform: rotate(-3deg);
    }
  }

  .small {
    width: 50px;
    height: 50px;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 1s;

  }

  @media (hover: hover) {
    &:hover {
      .large {
        :nth-child(1) {
          transform: translate(-150px, 20px) rotate(-15deg);
        }
        :nth-child(3) {
          transform: translate(-50px, -20px) rotate(-5deg);
        }
        :nth-child(4) {
          transform: translate(50px, 10px) rotate(5deg);
        }
        :nth-child(6) {
          transform: translate(250px, 25px) rotate(15deg);
        }
      }

      .small {
        animation: move 1.5s ease-in-out infinite alternate;

        :nth-child(2) {
          transform: translate(-300px, -200px) rotate(-10deg);
        }

        :nth-child(5) {
          transform: translate(250px, -300px) rotate(5deg);
        }
      }
    }

    @keyframes move {
      from {
        top: 45%;
      }

      to {
        top: 55%;
      }
    }
  }
`;

export default CardsStyled;

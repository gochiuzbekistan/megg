import styled from "styled-components";

const CountdownStyled = styled.div`
  h3 {
    font-size: 20px;

    @media screen and (max-width: 500px) {
      font-size: 15px;
    }
  }

  .time-left {
    display: flex;
    justify-content: center;
    gap: 20px;

    .segment {
      display: flex;
      align-items: baseline;

      .numbers {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .digit {
          font-size: 60px;

          @media screen and (max-width: 500px) {
            font-size: 35px;
          }
        }

        .key {
          font-size: 13px;
          letter-spacing: 3px;

          @media screen and (max-width: 500px) {
            font-size: 10px;
            letter-spacing: 2px;
          }
        }
      }

      .colon {
        margin-left: 20px;
        font-size: 30px;

        @media screen and (max-width: 500px) {
          margin-left: 15px;
        }
      }
    }

    @media screen and (max-width: 500px) {
      gap: 15px;
    }
  }
`;

export default CountdownStyled;

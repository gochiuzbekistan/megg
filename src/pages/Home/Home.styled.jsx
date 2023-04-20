import styled from "styled-components";
import link_icon from "../../assets/images/link-icon.svg";

const HomeStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
  width: 100%;
  flex-grow: 1;

  .hero {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    .main-meg {
      width: 500px;
      height: auto;

      @media screen and (max-width: 500px) {
        width: 300px;
      }
    }

    .name {
      h1 {
        font-size: 100px;
        width: 500px;

        @media screen and (max-width: 900px) {
          width: auto;
        }

        @media screen and (max-width: 500px) {
          font-size: 50px;
        }
      }

      p {
        color: #ffcd77;
        font-size: 13px;
        letter-spacing: 5px;
        text-transform: uppercase;
      }
    }

    @media screen and (max-width: 1300px) {
      flex-direction: column;
    }
  }

  .character {
    position: relative;

    h2 {
      color: var(--pink-color);
      font-size: 50px;
      align-self: center;

      @media screen and (max-width: 500px) {
        font-size: 35px;
      }
    }

    .bio {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .detail {
        display: flex;
        flex-direction: column;
        gap: 10px;

        h3 {
          font-size: 40px;

          @media screen and (max-width: 500px) {
            font-size: 25px;
          }
        }

        p {
          font-size: 18px;
          width: 800px;
          line-height: 1.5rem;

          @media screen and (max-width: 900px) {
            width: auto;
          }

          @media screen and (max-width: 500px) {
            font-size: 16px;
          }
        }
      }
    }

    a {
      color: var(--pink-color);
      font-size: 16px;
      align-self: center;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;

      ::after {
        content: "";
        background-image: url(${link_icon});
        background-size: cover;
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export default HomeStyled;

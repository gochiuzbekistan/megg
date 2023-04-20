import styled from "styled-components";
import home from "../../assets/images/home.svg";
import close from "../../assets/images/close.svg";
import info from "../../assets/images/info.svg";
import link_icon from "../../assets/images/link-icon.svg";

const GalleryStyled = styled.main`
  --mills: 500m8;
  background: #a93b4d;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  position: relative;
  z-index: 1;

  .home-link {
    background-image: url(${home});
    background-color: azure;
    background-size: 75%;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }

  .images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;

    .card {
      position: relative;

      .turn-card {
        background-image: url(${info});
        background-size: cover;
        background-color: azure;
        position: absolute;
        top: 10px;
        right: 10px;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        border: none;
      }

      .links {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;

        a {
          color: azure;
          font-size: 18px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;

          ::after {
            content: "";
            background-image: url(${link_icon});
            background-size: 75%;
            background-position: center;
            background-repeat: no-repeat;
            background-color: #f6efefcc;
            border-radius: 3px;
            width: 18px;
            height: 18px;
          }
        }

        button {
          background-image: url(${close});
          background-size: cover;
          background-color: azure;
          position: absolute;
          top: 10px;
          left: 10px;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          border: none;
        }
      }
    }
  }

  .pop-up {
    position: fixed;
    object-fit: contain;

    &.full-image {
      animation: go ease-in-out var(--mills) forwards;
    }

    &.receded {
      animation: shrink ease-in-out var(--mills) forwards;
    }
  }

  .loading {
    background: #2d586a55;
    position: fixed;
    top: var(--top);
    left: var(--left);
    width: var(--width);
    height: var(--height);
    display: grid;
    place-items: center;

    .boxes {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      gap: 15px;

      span {
        width: 30px;
        height: 30px;
        animation: pulse 0.85s cubic-bezier(0, 1.03, 1, 0.99) var(--delay)
          infinite;

        :nth-child(1) {
          background: #ff3456;
          --delay: 0ms;
        }

        :nth-child(2) {
          background: skyblue;
          --delay: 50ms;
        }

        :nth-child(3) {
          background: #bbed6e;
          --delay: 150ms;
        }

        :nth-child(4) {
          background: #edb54f;
          --delay: 100ms;
        }

        @keyframes pulse {
          from {
            transform: scale(1);
          }

          50% {
            transform: scale(1.5);
          }

          to {
            transform: scale(1);
          }
        }
      }
    }
  }

  .backdrop {
    background: #55324d99;
    position: fixed;
    inset: 0;
    opacity: 0;
    transition: opacity var(--mills);

    &.fade-in {
      animation: fade-in var(--mills) forwards;
    }

    &.fade-out {
      animation: fade-out var(--mills) forwards;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes fade-out {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  }

  .close {
    background-image: url(${close});
    background-color: azure;
    background-size: cover;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    position: fixed;
    top: 20px;
    right: 20px;
    border: none;
  }

  @keyframes shrink {
    from {
      width: min(var(--final-width), 100vw);
      height: min(var(--final-height), 100vh);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    to {
      transform: translate(0, 0);
      width: var(--initial-width);
      height: var(--initial-height);
      top: var(--top);
      left: var(--left);
    }
  }

  @keyframes go {
    from {
      width: var(--initial-width);
      height: var(--initial-height);
      top: var(--top);
      left: var(--left);
    }

    to {
      width: min(var(--final-width), 100vw);
      height: min(var(--final-height), 100vh);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default GalleryStyled;

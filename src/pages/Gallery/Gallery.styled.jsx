import styled from "styled-components";

const GalleryStyled = styled.main`
  --mills: 500ms;
  background: pink;

  .images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
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
    position: fixed;
    top: 20px;
    right: 20px;
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

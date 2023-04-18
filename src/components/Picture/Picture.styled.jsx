import styled from "styled-components";

const PictureStyled = styled.div`
  width: 200px;
  height: 300px;
  display: grid;
  place-items: center;
  position: relative;
  pointer-events: none;

  .background {
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    position: absolute;
    inset: 0;
  }

  img {
    max-width: 200px;
    max-height: 300px;
    position: relative;
  }
`;

export default PictureStyled;

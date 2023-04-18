import PictureStyled from "./Picture.styled";

export default function Picture({ src }) {
  return (
    <PictureStyled src={src}>
      <span className="background"></span>
      <img src={src} />
    </PictureStyled>
  );
}

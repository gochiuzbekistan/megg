import { Link } from "wouter";
import GalleryStyled from "./Gallery.styled";

export default function Gallery() {
  return (
    <GalleryStyled>
      <Link href="/">home</Link> Gallery
    </GalleryStyled>
  );
}

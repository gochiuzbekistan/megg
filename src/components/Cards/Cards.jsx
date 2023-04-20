import { Link } from "wouter";
import CardsStyled from "./Cards.styled";
import testImage from "../../assets/images/shot.png";

export default function Cards() {
  return (
    <CardsStyled>
      <Link title="gallery" to="/gallery">
        <img src={testImage} alt="large image" className="image large" />
        <img src={testImage} alt="small image" className="image small" />
        <img src={testImage} alt="large image" className="image large" />
        <img src={testImage} alt="large image" className="image large" />
        <img src={testImage} alt="small image" className="image small" />
        <img src={testImage} alt="large image" className="image large" />
      </Link>
    </CardsStyled>
  );
}

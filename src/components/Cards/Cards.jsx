import { Link } from "wouter";
import CardsStyled from "./Cards.styled";
import card_01 from "../../assets/images/cards/card_01.jpg";
import card_02 from "../../assets/images/cards/card_02.jpg";
import card_03 from "../../assets/images/cards/card_03.jpg";
import card_04 from "../../assets/images/cards/card_04.jpg";
import small_01 from "../../assets/images/cards/small_01.jpg";
import small_02 from "../../assets/images/cards/small_02.jpg";

export default function Cards() {
  return (
    <CardsStyled>
      <Link title="gallery" to="/gallery">
        <img src={card_01} alt="large image" className="image large" />
        <img src={small_01} alt="small image" className="image small" />
        <img src={card_02} alt="large image" className="image large" />
        <img src={card_03} alt="large image" className="image large" />
        <img src={small_02} alt="small image" className="image small" />
        <img src={card_04} alt="large image" className="image large" />
      </Link>
    </CardsStyled>
  );
}

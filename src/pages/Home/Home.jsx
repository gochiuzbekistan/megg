import Stars from "../../components/Stars/Stars";
import { Link } from "wouter";
import HomeStyled from "./Home.styled";

export default function Home() {
  return (
    <HomeStyled>
      Home
      <Link href="/gallery">Gallery</Link>
      <Stars totalStars={10}>
        <div className="container">
          <h1>Resonance</h1>
          <p>
            You lost the game before you could know it existed. There are people
            right now peeking at versions of GPT and other unknown technologies
            that have insights that are years ahead of you. They have analyzed
            the market to unprecedented degrees, unveiled every opportunity,
            leveraged amounts of user data that are unimaginable. You will not
            outsmart them. Your ingenuity is but a drop in the ocean of outputs
            that this monster generates every second. It's over.
          </p>
        </div>
      </Stars>
    </HomeStyled>
  );
}

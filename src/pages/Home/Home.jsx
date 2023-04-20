import Stars from "../../components/Stars/Stars";
import Cards from "../../components/Cards/Cards";
import Countdown from "../../components/Countdown/Countdown";
import HomeStyled from "./Home.styled";
import Firebase from "../../components/Firebase/Firebase";
import Mg from "../../assets/images/megg_.png";

export default function Home() {
  return (
    <HomeStyled>
      <Firebase />
      <section className="hero">
        <Stars totalStars={5}>
          <img className="main-meg" src={Mg} alt="Megu  " />
        </Stars>
        <div className="name info-card">
          <h1>Natsu Megumi</h1>
          <p>Let's all love Meg</p>
        </div>
      </section>
      <section className="character info-card">
        <h2>Who is Megu?</h2>
        <div className="bio">
          <div className="detail">
            <h3>Appearance</h3>
            <p>
              Megumi has medium-length light red hair pulled into curled loose
              ringlets, called tornadoes, at the bottom of her head held with
              white frilly ornaments. Her bangs are parted on the side, with
              most of them facing the right. Her dark pink eyes have a fleck of
              amber.
              <br />
              <br />
              For school she wears a white and navy sailor-style uniform. When
              helping at Rabbit House she borrows Cocoa's uniform, or she is
              shown to have her own salmon pink variant.
            </p>
          </div>
          <div className="detail">
            <h3>Personality</h3>
            <p>
              Megumi is gentle and friendly with a light personality. She is
              sweet and always in a good mood, but she is genuinely shy about
              doing things before others. Although she doesn't show it off
              often, she is a talented ballet dancer and is noted for being
              really graceful.
            </p>
          </div>
        </div>
        <a href="https://gochiusa.fandom.com/wiki/Megumi_Natsu">source</a>
      </section>
      <Countdown month={10} day={2} />
      <Cards />
    </HomeStyled>
  );
}

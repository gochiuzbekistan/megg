import { useState } from "react";
import CountdownStyled from "./Countdown.styled";
import time_to_date from "../../utilities/time_to_date";
import { useEffect } from "react";
import PartyCard from "../PartyCard/PartyCard";
import Stars from "../Stars/Stars";

export default function Countdown({ month, day }) {
  const [timeLeft, setTimeLeft] = useState(() => time_to_date(month, day));
  const digits = timeLeft
    ? [
        {
          value: String(timeLeft.days).padStart(2, "0").split(""),
          key: "days",
        },
        {
          value: String(timeLeft.hours).padStart(2, "0").split(""),
          key: "hours",
        },
        {
          value: String(timeLeft.minutes).padStart(2, "0").split(""),
          key: "minutes",
        },
        {
          value: String(timeLeft.seconds).padStart(2, "0").split(""),
          key: "seconds",
        },
      ]
    : null;

  useEffect(() => {
    function tick() {
      setTimeLeft(time_to_date(month, day));
    }

    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownStyled className="info-card">
      <h3>
        Megu's birthday is the second of November, which is
        {timeLeft ? " in..." : " TODAY!"}{" "}
      </h3>
      {timeLeft ? (
        <div className="time-left">
          {digits.map((set, index) => (
            <div className="segment" key={set.key}>
              <div className="numbers">
                <div className="digits">
                  {set.value.map((digit, i) => (
                    <span key={i} className="digit">
                      {digit}
                    </span>
                  ))}
                </div>
                <span className="key">{set.key}</span>
              </div>
              {index === digits.length - 1 ? null : (
                <span className="colon">:</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <Stars totalStars={3}>
          <PartyCard />
        </Stars>
      )}
    </CountdownStyled>
  );
}

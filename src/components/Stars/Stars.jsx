import StarsStyled from "./Stars.styled";
import useVisibility from "../../hooks/useVisibility";
import add_star from "../../utilities/add_star";
import { useEffect, useRef } from "react";

export default function Stars({ children, totalStars }) {
  const containerRef = useRef(null);
  const intervalIdRef = useRef(null);
  const visible = useVisibility();

  useEffect(() => {
    if (!visible) clearInterval(intervalIdRef.current);
    else
      intervalIdRef.current = setInterval(() => {
        for (let i = 0; i < totalStars; i++) add_star(containerRef.current);
      }, 1000);

    return () => clearInterval(intervalIdRef.current);
  }, [visible]);

  return <StarsStyled ref={containerRef}>{children}</StarsStyled>;
}

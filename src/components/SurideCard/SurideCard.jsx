import SurideCardStyled from "./SurideCard.styled";

export default function SurideCard({ front, back, turned }) {
  return (
    <SurideCardStyled className={`${turned ? "turned" : ""}`}>
      <div className="content">
        <div className="front">{front}</div>
        <div className="back" onClick={(e) => e.stopPropagation()}>
          {back}
        </div>
      </div>
    </SurideCardStyled>
  );
}

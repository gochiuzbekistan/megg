import { Link } from "wouter";
import GalleryStyled from "./Gallery.styled";
import Picture from "../../components/Picture/Picture";
import { useState, useRef } from "react";
import SurideCard from "../../components/SurideCard/SurideCard";

export default function Gallery({ images }) {
  const [currentThing, setCurrentThing] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingstyles, setLoadingStyles] = useState(null);
  const [turned, setTurned] = useState(null);
  const galleryRef = useRef(null);

  function handle_click(event, src, index) {
    const img = event.target.querySelector("img");
    const rect = img.getBoundingClientRect();
    const sizesImage = new Image();
    const top = `${rect.top}px`;
    const left = `${rect.left}px`;
    const width = `${rect.width}px`;
    const height = `${rect.height}px`;
    const currentThing = {
      top,
      left,
      initialWidth: width,
      initialHeight: height,
    };

    currentThing.src = src;
    sizesImage.src = src;
    setLoadingStyles({ top, left, width, height });
    setIsLoading(true);

    sizesImage.addEventListener("load", () => {
      currentThing.finalWidth = `${sizesImage.width}px`;
      currentThing.finalHeight = `${sizesImage.height}px`;
      currentThing.index = index;

      setIsLoading(false);
      setIsOpen(true);
      setCurrentThing(currentThing);
    });
  }

  function close() {
    const element = document.querySelector(
      `[data-index="${currentThing.index}"]`
    );
    const img = element.querySelector("img");
    const rect = img.getBoundingClientRect();
    const top = `${rect.top}px`;
    const left = `${rect.left}px`;

    setCurrentThing((prevThing) => ({ ...prevThing, top, left }));
    setIsOpen(false);
    setTimeout(() => {
      setCurrentThing(null);
    }, 500);
  }

  function turn_card(event, index) {
    event.stopPropagation();
    setTurned(index);
  }

  return (
    <GalleryStyled ref={galleryRef}>
      <Link className="home-link" title="home" href="/megg"></Link>
      <div className="images">
        {images.map((image, index) => (
          <div
            className="card"
            key={index}
            data-index={index}
            onClick={
              isLoading
                ? null
                : (event) => handle_click(event, image.original, index)
            }
          >
            <SurideCard
              turned={turned === index}
              front={
                <div>
                  <Picture src={image.thumbnail} />
                  <button
                    className="turn-card"
                    onClick={(event) => turn_card(event, index)}
                  ></button>
                </div>
              }
              back={
                <div className="links">
                  <a href={image.artist} target="_blank">
                    Artist
                  </a>
                  <a href={image.source} target="_blank">
                    Source
                  </a>
                  <button onClick={() => setTurned(null)}></button>
                </div>
              }
            />
          </div>
        ))}
      </div>
      {isLoading && (
        <div
          className="loading"
          style={{
            "--top": loadingstyles.top,
            "--left": loadingstyles.left,
            "--width": loadingstyles.width,
            "--height": loadingstyles.height,
          }}
        >
          <div className="boxes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      {currentThing && (
        <div>
          <div className={`backdrop ${isOpen ? "fade-in" : "fade-out"}`}></div>
          <img
            className={`pop-up ${isOpen ? "full-image" : "receded"}`}
            src={currentThing.src}
            style={{
              "--top": currentThing.top,
              "--left": currentThing.left,
              "--initial-width": currentThing.initialWidth,
              "--initial-height": currentThing.initialHeight,
              "--final-width": currentThing.finalWidth,
              "--final-height": currentThing.finalHeight,
            }}
          />
          <button className="close" onClick={close}></button>
        </div>
      )}
    </GalleryStyled>
  );
}

import React from "react";
import "./Slider.css";
import leftArrow from "./icons/right-arrow.png";
import rightArrow from "./icons/right-arrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <h2>Ir</h2>: <h2>volver</h2>}
    </button>
  );
}
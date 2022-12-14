import React from 'react'
import './BtnSlider.css'


const BtnSlider = ({direction, moveSlide}) => {
  return (
    <div className="center-con" onClick={moveSlide}>
    <div className="round">
        <div id="cta">
            <span className="arrowY primera next "></span>
            <span className="arrowY segunda next "></span>
        </div>
    </div>
</div>
    )
}

export default BtnSlider
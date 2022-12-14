import React from 'react'
import { Link } from 'react-scroll'
import './ScrollBottom.css'

const ScrollBottom = ({linkTo}) => {
  return (
    <>
    <div className = 'wrapper'>
      <Link to = {linkTo} smooth = {true} duration={800}>
      <div className="circle">
      </div>    
      <div className="circle circle-2">
    </div>
    <div className="arrow">
      <div className="arrow_line">
      </div>
      <div className="arrow_tip-wrapper">
        <div className="arrow_tip left">
        </div>
        <div className="arrow_tip right">
        </div>
      </div>
    </div>
    </Link>
    </div>
    </>
  )
}

export default ScrollBottom
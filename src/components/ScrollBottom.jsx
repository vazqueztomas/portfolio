import React from 'react'
import { Link } from 'react-scroll'
import './ScrollBottom.css'

const ScrollBottom = ({linkTo}) => {
  return (
    <>
    <div class = 'wrapper'>
      <Link to = {linkTo} smooth = {true} duration={800}>
      <div class="circle">
      </div>    
      <div class="circle circle-2">
    </div>
    <div class="arrow">
      <div class="arrow_line">
      </div>
      <div class="arrow_tip-wrapper">
        <div class="arrow_tip left">
        </div>
        <div class="arrow_tip right">
        </div>
      </div>
    </div>
    </Link>
    </div>
    </>
  )
}

export default ScrollBottom
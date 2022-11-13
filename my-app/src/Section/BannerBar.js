import React from 'react'
import Img1 from '../Images/img-2.svg'
import Img2 from '../Images/img-1.svg'

function Banner_bar () {
  return (
    <div className='banner_bar'>
      <div className='container-fluid'>
        <img className='img1' src={Img1} alt=''/>
        <div className='txt1'>
          <h1>SALE UP To 50% Off</h1>
          <p>Online shopping free home delivery over $100</p>
          <button type='button' className='btn1'><b>SHOP NOW</b></button>
        </div>
        <img className='img2' src={Img2} alt=''/>
      </div>
    </div>
  );
}

export default Banner_bar;
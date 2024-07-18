import React from 'react'
import linear from '../assets/images/linearImg.png'
import Earthgroup from '../assets/images/earthGroup.png'
import "../Css/Earth.css"

const Earth = () => {

  return (
    <div className='background  w-svw h-svh flex  items-center justify-center'>
       
        <img  className='w-1/2 h-auto' src={Earthgroup}/>

   
    </div>
  )
}

export default Earth
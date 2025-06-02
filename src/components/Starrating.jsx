import React from 'react'
import { assets } from '../assets/assets'

const Starrating = ({rating=4}) => {
  return (
   <>
  
         {Array(5).fill('').map((_, index) => (
                            <img key={index} src={rating >index ? assets.starIconFilled:assets.starIconOutlined} alt="staricon" className='w-4 h-5'/>
  ))}
   </>
  )
}

export default Starrating
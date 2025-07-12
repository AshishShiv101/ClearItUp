import React from 'react'
import { assets } from '../assets/assets'
const Header = () => {
  return (
    <div>
      <div>
        <h1>Remove the <br/> background from <br/>images for free</h1>
        <p>dhakjghakjhdakjbhakhbakhbakjhbiautiaybuaiybiauyhaiubyaiuyb <br/> ahaoihyaoihfayoiyaofynaoynaonyaonyaoiayonpayopy</p>
    
        <div>
            <input type = "file" name='' id=''/>
            <label htmlFor=''>
                <img src={assets.upload_btn_icon} alt=''/>
                <p>Upload your image</p>
            </label>
        </div>
      </div>
    </div>
  )
}

export default Header

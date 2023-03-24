import {AiFillGoogleCircle,AiFillAmazonCircle,
  AiFillYoutube,AiFillInstagram , AiFillGithub} from "react-icons/ai";
import React from 'react'

const Footer = () => {
  return (

    <div className='footer'>

    <div className='footer1'>
        <h1>Techystar</h1>
        <p>@All Right Reserved</p>
    </div>

    <div className='footer2'>
   {/* / <h5>Follow US</h5> */}
   
   <div className='footer3'>

        <a href='https://instagram.com/' target='_blank'><AiFillInstagram/></a>
        <a href='https://youtube.com/' target='_blank'><AiFillYoutube/></a>
        <a href='https://github.com/' target='_blank'><AiFillGithub/></a>
    </div>
    </div>

    </div>
  )
}

export default Footer
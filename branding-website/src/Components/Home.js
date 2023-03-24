import React from 'react';
import Dynamic_Routing from './Dynamic_Routing';
import vj from '../Assets/2.webp';
import {AiFillGoogleCircle,AiFillAmazonCircle,
AiFillYoutube,AiFillInstagram} from "react-icons/ai";


const Home = () => {

const array = [1,2,3,4,5];

  return (
  <div>

      <div className='home' id='home'>
      <main>
        <h1>TECHYSTAR</h1>
        <p>Solutions To All Your Problems</p>
      </main>
    </div>

   {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

   
    <div className='home2'>
    <img src={vj}/>
<div>
  <p>TechSolutions is effective, reliable, and easy to work with. Schedule a 
    free consultation and we’ll show you why we were named one of the top IT 
    firms in North America

  </p>
</div>
    </div>


{/* ///////////////////////////////////////////////////////////////////////////////// */}

<div className='home3' id='about'>
<div>
  <h1>Who we are</h1>
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  </p>
</div>
  </div>

{/* ////////////////////////////////////////////////////////////////////// */}

<div className='home4' id='brands'>
<div>
  <h1>Brands</h1>

  <article>
    <div style={{animationDelay:'0.3s'}}>
           <AiFillGoogleCircle/>
           <p>Google</p>
    </div>

     <div style={{animationDelay:'0.5s'}}>
           <AiFillAmazonCircle/>
           <p>Amazon</p>
    </div>

     <div style={{animationDelay:'0.7s'}}>
           <AiFillYoutube/>
           <p>Youtube</p>
    </div>

     <div style={{animationDelay:'1s'}}>
           <AiFillInstagram/>
           <p>Instagram</p>
    </div>
  </article>
</div>
</div>






  </div>
  )
}

export default Home


      {/*                                     For Learning Purpose                                    */}
      {/* {
        array.map((Product_value)=>(
          <Dynamic_Routing value={Product_value}/>
        ))
      } */}
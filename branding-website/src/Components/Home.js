import React from 'react';
import Dynamic_Routing from './Dynamic_Routing';
import vj from '../Assets/2.webp';

const Home = () => {

const array = [1,2,3,4,5];

  return (
  <div>

      <div className='home'>
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
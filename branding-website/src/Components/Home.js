import React from 'react';
import Dynamic_Routing from './Dynamic_Routing';

const Home = () => {

const array = [1,2,3,4,5];

  return (
    <div>
      {
        array.map((Product_value)=>(
          <Dynamic_Routing value={Product_value}/>
        ))
      }
    </div>
  )
}

export default Home
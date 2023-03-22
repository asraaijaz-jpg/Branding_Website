import React  from 'react';
import './Style.css';
import { useParams } from 'react-router';

const Dynamic_Routing = (props) => {
  return (
    <div>
        <h1>Display Product {props.value}</h1>
    </div>
  )
}

export default Dynamic_Routing
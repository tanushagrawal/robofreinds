import React from 'react'
import './card.css'


const Card=(props)=>{
    return(
        <div class="card">
            <img src={props.imgsource} ></img>
            <h2>{props.name}</h2>
            <h6>{props.mail}</h6>
        </div>
    );
}



export default Card;
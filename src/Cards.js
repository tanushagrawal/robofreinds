import React from 'react'
import { robots } from './robots'
import Card from './Card'
import './index.css'
const Cards = ({robots})=>{
  const cards = []
  for (let i = 0; i < robots.length; i++) {
      const e = robots[i];
      cards.push(
<Card imgsource={"https://robohash.org/"+e} name={e} mail={e+"@gmail.com"}/>


      );
  }
  return(
      <div id="container">
        {cards}
      </div>
  );
}
export default Cards;
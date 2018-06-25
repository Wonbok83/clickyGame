import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

  <div onClick={() => props.click(props.id)} className={`card ${props.shake?"shakeImg":""}` } >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
   

  
  </div>
);

export default FriendCard;

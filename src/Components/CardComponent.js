import React from "react";
import "./SelectButton.css";

function CardComponent({image,altText,cardName,time,describtion}) {
  return (
    <div className="card-contant">
      <div className="image">
        <img src={image} alt={altText} height="200px" width="300px" />
      </div>
      <div className="card-describtion">
        <h2>{cardName}</h2>
        <h1>Eat time:{time}</h1>
        <p>{describtion}</p>
      </div>
    </div>
  );
}

export default CardComponent;

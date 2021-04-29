import React, { useState } from "react";
import "./Containt.css";
import Food from "./Data";
import CardComponent from './CardComponent.js'

function Containt() {
  const [item, setItem] = useState(Food);

  const setValue = (catagoryItem) => {
    const changeValue = Food.filter((catagoryTime) => {
      return catagoryTime.time === catagoryItem;
    });

    setItem(changeValue);
  };
  return (
    <>
      <div className="button-style">
        <button onClick={() => setValue("Morning")}>morning</button>
        <button  onClick={() => setValue("evening")}>Evening</button>
        <button  onClick={() => setValue("Afternoon")}>Afternoon</button>
        <button  onClick={() => setValue("night")}>night</button>
        <button  onClick={() => setItem(Food)}>all</button>
      </div>
      <div className="card">
        {item.map((food,index) => (
             <CardComponent
             id={index}
             key={index}
             image={food.image}
             altText={food.altText}
             cardName={food.cardName}
             time={food.time}
             describtion={food.describtion}
             />

           
         
        ))}
      </div>
    </>
  );
}

export default Containt;

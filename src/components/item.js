import React from 'react';
import './item.css'
export const Item = (props) => {
  return (
    <div className='item-style'>
      {
        props.isEditable ? 
        (<input type = 'text' onKeyPress={(e) => props.onKeyPress(e, props.index)} defaultValue = {props.item.name}></input>) : 
        (<h3 onDoubleClick= {props.onDoubleClick}>{props.item.name}</h3>)
      }
      <h3>{props.item.calorie}</h3>
      <button 
        name = {props.item.name} 
        className= 'button-style' 
        onClick={props.onClick}
        > Remove </button>
    </div>
  );
}
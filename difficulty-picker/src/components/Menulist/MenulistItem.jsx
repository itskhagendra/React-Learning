import React, { useState } from 'react';
import style from "./style.module.css"
function MenulistItem(props) {
    // const diffuclty = props.difficultylist;    
    // const items = diffuclty.map((value)=>{
    //     <li>{`set to ${value}`}</li>
    //     console.log(value);
    // })
  return (
    <>
    <div className={style.container}>
        <p>{`set Difficulty to ${props.difficulty}`}</p>
    </div>
    </>
  )
}

export default MenulistItem
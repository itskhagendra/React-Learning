import React from 'react';
import style from "./style.module.css"
function MenulistItem(props) {
    // const diffuclty = props.difficultylist;    
    // const items = diffuclty.map((value)=>{
    //     <li>{`set to ${value}`}</li>
    //     console.log(value);
    // })

    const onItemClick=()=>{
      props.onClick(props.difficulty)
    }
  return (
    <>
    <div className={`${style.container} ${props.isSelected?style.selected:""}`} onClick={onItemClick} >
        <p>{`set Difficulty to ${props.difficulty} `}</p>
    </div>
    </>
  )
}

export default MenulistItem
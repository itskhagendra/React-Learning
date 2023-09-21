import React from 'react'
import MenulistItem from './MenulistItem';
import style from "./style.module.css";
import {DIFFICULTY} from "../Constants"

function MenuList(props) {
  return (
    <div className={style.list}>{
      DIFFICULTY.map((diff)=>(
        <MenulistItem difficulty={diff} onClick={props.onItemClick} isSelected={diff===props.difficulty}/>
      ))}
    </div>
  )
}

export default MenuList
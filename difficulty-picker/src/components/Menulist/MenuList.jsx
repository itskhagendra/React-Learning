import React from 'react'
import MenulistItem from './MenulistItem';
import style from "./style.module.css";
function MenuList() {
    const list = ["Low","Medium","High","Insane"];
  return (
    <div className={style.list}>
        <MenulistItem difficulty={list[0]}/>
        <MenulistItem difficulty={list[1]}/>
        <MenulistItem difficulty={list[2]}/>
        <MenulistItem difficulty={list[3]}/>

    </div>
  )
}

export default MenuList
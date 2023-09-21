import React from 'react'
import MenulistItem from './MenulistItem';
import style from "./style.module.css";

function MenuList(props) {
    const list = ["Low","Medium","High","Insane"];
    const difflist=[];
    for(const diff of list)
    {
      difflist.push(
        <MenulistItem difficulty={diff} onClick={props.onItemClick} isSelected={diff===props.difficulty}/>
      )
    }
  return (
    <div className={style.list}>{difflist}</div>
  )
}

export default MenuList
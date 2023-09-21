import React from 'react'
import style from "./style.module.css";
function DisplayDifficulty(props) {
  return (
    <div className={style.container}>
        {props.difficulty?`Diffiulty set to ${props.difficulty}`: "No Difficulty Set"}
    </div>
  )
}

export default DisplayDifficulty
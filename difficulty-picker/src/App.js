import { useState } from 'react';
import './App.css';
import DisplayDifficulty from './components/DisplayDifficulty/DisplayDifficulty';
import MenuList from './components/Menulist/MenuList';

function App() {
  const [currentDifficlty,setCurrentDifficulty] = useState("");
  const onMenuListItemClick=(difficulty)=>
  {
    setCurrentDifficulty(difficulty);
  }

  return (
    <>
      <h1 style={{textAlign:'center'}}>Select Your React Difficulty</h1>
      <div className="App">
        <MenuList onItemClick={onMenuListItemClick} difficulty={currentDifficlty}/>
        <DisplayDifficulty difficulty={currentDifficlty}/>
      </div>
    </>
  );
}

export default App;

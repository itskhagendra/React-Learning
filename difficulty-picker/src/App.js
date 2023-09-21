import './App.css';
import DisplayDifficulty from './components/DisplayDifficulty/DisplayDifficulty';
import MenuList from './components/Menulist/MenuList';

function App() {
  return (
    <div className="App">
      <MenuList/>
      <DisplayDifficulty difficulty="low"/>
    </div>
  );
}

export default App;

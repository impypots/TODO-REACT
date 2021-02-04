import './App.css';
import { useState } from 'react';
import StarRating from './StarRating';
import TopMenu from './TopMenu';
import AddItem from './AddItem';

function App() {
  const [listArray, setList] = useState([
    "Go gym",
    "Buy groceries",
    "Eat big fishy",
    "Go to andromeda (Fun vacation)."
  ])

  return (
    <>
    <TopMenu />
    <div id="listContainer">
      {listArray.map((n, i) => {
        return <div className="listItem" key={i}>{n}</div>
      })}
    </div>
    <AddItem /><br></br>
    </>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import TopMenu from './TopMenu';
import AddItem from './AddItem';
import Data from './Data';

function App() {
  const [listArray, setList] = useState(Data)

  return (
    <>
    <TopMenu />
    <div id="listContainer">
      {listArray.map((n, i) => {
        return <div className="listItem" key={i}>{n}
               <button>X</button></div>
      })}
    </div>
    <AddItem setList={setList} /><br></br>
    </>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import TopMenu from './TopMenu';
import AddItem from './AddItem';
import Data from './Data';

function App() {
  const [listArray, setList] = useState(Data);
  const [typeWork, setType] = useState("Work");

  function removeItem(key) {
    console.log(key + "KEY")

    const newList = listArray.filter(item => listArray.indexOf(item) !== key);

    setList(newList);
  }

  useEffect(() => {
    document.title = 'To Do List :)'
  })

  return (
    <>
    <TopMenu />
    <div id="listContainer">
      {listArray.map((n, i) => {
        return <div className='listItem' id={'listItem' + i} key={i}>{n}
               <button onClick={() => removeItem(i)}>X</button></div>
      })}
    </div>
    <AddItem setList={setList} setType={setType} typeWork={typeWork} /><br></br>
    </>
  );
}

export default App;

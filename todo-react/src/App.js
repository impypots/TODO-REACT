import './App.css';
import { useState } from 'react';
import StarRating from './StarRating'

function App() {
  const [count, setCount] = useState(0)
  
  const [,secondfishy] = ["small fishy", "big fishy", "yellow fishy"];

console.log(secondfishy)   

  return (
    <>
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
    <StarRating />
    </>
  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footers';
import ReadingSpace from './components/Reading';

function App() {
  const [count, setCount] = useState(0);
  const [selection, setSelection] = useState([]);
  const [readingClass, setReadingClass] = useState('closed-reading')
  const [started, setStart] = useState(false)
  const [ids, setIds] = useState([])

  const shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const card_ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

  useEffect(()=>{
      shuffleCards(card_ids);
      const shuffledSlice = card_ids.slice(0,5);
      setIds(shuffledSlice)
  }, [])

  function start () {
    console.log(ids); // DELETE LATER
    setReadingClass('open-reading');
    setStart(true);
    for (let each of selection) {
      let card = document.querySelector(`.${each}`);
      let c = card.children;
      c[0].classList.toggle('flipped');
      card.classList.toggle('resting');
      card.classList.toggle('select-card')
      card.classList.toggle(`target-${selection.indexOf(each)}`);
    }
  }

  function clear () {
    setReadingClass('closed-reading');
  }

  return (
    <div className="App">
      <Header />
        <ReadingSpace 
        class={readingClass}
        count={count} 
        setCount={setCount}
        selection={selection}
        setSelection={setSelection}
        started={started}
        />
        <div style={{height: "2rem", display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div className="buttons">
            <button 
              disabled={count < 5}
              onClick={()=>start()}
            >
              Start
            </button>
            <button 
              disabled={count < 1}
              onClick={()=>clear()}
            >Clear</button>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;


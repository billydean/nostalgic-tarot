import React from 'react';
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footers';
import ReadingSpace from './components/Reading';

function App() {
  const [count, setCount] = useState(0);
  const [selection, setSelection] = useState([]);
  const [readingClass, setReadingClass] = useState('closed-reading')

  function start () {
    setReadingClass('open-reading');
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


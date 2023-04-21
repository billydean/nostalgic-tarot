import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footers';
import ReadingSpace from './components/Reading';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
        <ReadingSpace count={count} setCount={setCount}/>
        <div style={{height: "2rem", display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div className="buttons">
            <button disabled={count < 5}>Start</button>
            <button disabled={count < 1}>Clear</button>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;

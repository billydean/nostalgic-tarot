import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footers';
import ReadingSpace from './components/Reading';
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
        <ReadingSpace count={count} setCount={setCount}/>
        <div style={{height: "2rem", display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div className="buttons">
            <Button label="Start"/>
            <Button label="Clear"/>
            </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;

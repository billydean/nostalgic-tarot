import './App.css';
import Header from './components/Header';
import Footer from './components/Footers';
import ReadingSpace from './components/Reading';
import LowerThirds from './components/LowerThirds';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <ReadingSpace />
        <LowerThirds />
      </div>
      <Footer />
    </div>
  );
}

export default App;

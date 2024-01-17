import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Vision from './components/Vision';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Vision/>
    </div>
  );
}

export default App;

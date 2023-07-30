import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <>리액트를 시작해봅시다</>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

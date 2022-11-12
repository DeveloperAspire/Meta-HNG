import './App.css';
import Home from './pages/Home';
import Locations from './pages/Locations';
import {Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

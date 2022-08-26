import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import EditCake from './components/EditCake';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake/:id" element={<EditCake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

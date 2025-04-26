// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nvabar';
import Home from './components/Home';
import LatestNews from './components/LatestNews';
 
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/latest-news" element={<LatestNews/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
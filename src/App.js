import './App.css';
import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import MainPage from './pages/MainPage';



function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<MainPage />}/>
      </Routes>
    </div>
  );
}

export default App;

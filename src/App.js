import './App.css';
import {useState, useEffect} from 'react';
import MainPage from './view/Desktop/MainPage';
import { Provider } from './context/PocketContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileView from './view/Mobile/MobileView';
import NotesMobilePage from './components/NotesMobilePage/NotesMobilePage';
import usePocketContext from './hooks/usePocketContext';

function App() {
  
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = usePocketContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
  }, [selected]);
  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);


  return (
        <Provider>
        <div className="App">
          {screenSize > 500 ? (
            <MainPage />
          ) : (
            <Router>
              <Routes>
                <Route path="/" element={<MobileView />} />
                <Route path="/notes" element={<NotesMobilePage />} />
              </Routes>
            </Router>
          )}
        </div>
      </Provider>
  );
}

export default App;

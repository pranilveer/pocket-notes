import './App.css';
import { useState, useEffect } from 'react';
import MainPage from './view/Desktop/MainPage';
import { Provider } from './context/PocketContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileView from './view/Mobile/MobileView';
import NotesMobilePage from './components/NotesMobilePage/NotesMobilePage';
import usePocketContext from './hooks/usePocketContext';

function App() {
  // State to track the screen size
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = usePocketContext();

  // Effect to initialize 'selected' state from local storage
  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
  }, [selected]);

  // Function to check and update screen size
  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  // Event listener for window resize
  window.addEventListener("resize", checkScreenSize);

  return (
    <Provider>
      <div className="App">
        {screenSize > 500 ? ( // Conditional rendering based on screen size
          <MainPage />
        ) : (
          <Router>
            <Routes>
              {/* Route for the MobileView component */}
              <Route path="/" element={<MobileView />} />
              {/* Route for the NotesMobilePage component */}
              <Route path="/notes" element={<NotesMobilePage />} />
            </Routes>
          </Router>
        )}
      </div>
    </Provider>
  );
}

export default App;

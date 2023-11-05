import './App.css';
import React from 'react';
import MainPage from './view/Desktop/MainPage';
import { Provider } from './context/PocketContext';

function App() {
  return (
    <Provider>
    <div className="App">
        <MainPage />
    </div>
    </Provider>
  );
}

export default App;

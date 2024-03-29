import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'


function App() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
    setInnerWidth(window.innerWidth);
  }, [])

  window.addEventListener("orientationchange", (event) => {
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
    requestAnimationFrame(() => {
      setInnerWidth(window.innerWidth);
      // alert(window.innerWidth);
    });
  })

  return (
    <div className="App">
      <header className="App-header">
        Your screen:<br />
        Width: {screenWidth} pixel<br />
        Height: {screenHeight} pixel<br />
      </header>
    </div>
  );
}

export default App;

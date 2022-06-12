import { useState } from "react";
import "./App.css";
import { Dialog, Footer, Header } from "./components";
import DataContext from "./contexts/dataContext";

function App() {
  const [center, setCenter] = useState(false);
  const [lower, setLower] = useState(false);
  const [visible, setVisible] = useState(true);
  const handleCenter = () => {
    setCenter(true);
    setLower(false);
  };

  const handleLower = () => {
    setLower(true);
    setCenter(false);
  };

  const reset = () => {
    setCenter(false);
    setLower(false);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setVisible(true);
    }
    if (event.key === "Escape") {
      setVisible(false);
    }
  };

  return (
    <div className="App" tabIndex="0" onKeyDown={handleKeyPress}>
      <DataContext.Provider
        value={{
          center: center,
          lower: lower,
          handleCenter: handleCenter,
          handleLower: handleLower,
          reset: reset,
          visible: visible,
        }}
      >
        <Header />
        <Dialog />
      </DataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

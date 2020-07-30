import React from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./Styelsheet.scss";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;

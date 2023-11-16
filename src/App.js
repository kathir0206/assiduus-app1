import React from "react";
import Header from "./Header/header";
import Sidebar from "./sidebar/Sidebar";
import MainContent from "./Main Content/MainContent";
import "./App.css"

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
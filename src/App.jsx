import React from "react";
import HomePage from "./Pages/HomePage";
import Nav from "./components/Nav";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <Cart />
      <Router>
        <Header />
      </Router>
      <Nav />
    </div>
  );
};

export default App;

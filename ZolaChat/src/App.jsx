import { useState } from "react";

import "./App.scss";
import { Login } from "./page/log_in/Login";
import { Outlet } from "react-router-dom";
import { Home } from "./page/home/Home";

function App() {
  return (
    <div className="web-container">
      <Home />
      <Outlet />
    </div>
  );
}

export default App;

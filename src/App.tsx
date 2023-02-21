import { BrowserRouter } from "react-router-dom";
import { AppRoutes, AuthRoutes } from "./routes";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

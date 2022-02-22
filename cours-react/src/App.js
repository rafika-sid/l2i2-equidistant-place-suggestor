import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

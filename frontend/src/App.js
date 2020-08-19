import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/layout/Header";
import Routes from "./Routes";
import Footer from "./components/layout/Footer";
import "./style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

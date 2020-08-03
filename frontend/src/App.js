import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Routes from "./Routes";
import Footer from "./components/Footer";
import "./style.css";

class App extends React.Component {
  render() {
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
}

export default App;

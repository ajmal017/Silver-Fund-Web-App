import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import ContentRouter from "./routes";
import Footer from "./components/Footer";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <ContentRouter />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;

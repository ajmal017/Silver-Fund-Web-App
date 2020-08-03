import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import BaseRouter from "./routes";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Layout {...this.props}>
            <BaseRouter />
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

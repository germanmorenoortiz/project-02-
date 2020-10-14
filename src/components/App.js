import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import All from "../pages/All.js";
import Ten from "../pages/Ten.js";
import Last from "../pages/Last.js";

import Header from "./Header.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Last} />
          <Route path="/ten" component={Ten} />
          <Route path="/all" component={All} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

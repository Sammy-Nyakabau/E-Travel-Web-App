import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./screens/SearchPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/SearchPage">
            <Header />
            <SearchPage />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

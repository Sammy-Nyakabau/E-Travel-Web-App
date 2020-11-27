/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Hotel from "./screens/Hotel";
import Wishlist from "./screens/Wishlist";
import RecentlyBooked from "./screens/RecentlyBooked";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Header_solid from "./components/Header_solid";
import Footer from "./components/Footer";
import ListingsPage from "./screens/ListingsPage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop>
          <Switch>
            <Route path="/ListingsPage">
              <Header />
              <ListingsPage />
              <Footer />
            </Route>
            <Route path="/Wishlist">
            <Header_solid/>
            <Wishlist/>
            <Footer/>
            </Route>
            <Route path="/Login">
              <Login />
            </Route>

            <Route path="/Profile">
              <Header_solid />
              <Profile />
              <Footer />
            </Route>

            <Route path="/RecentlyBooked">
              <Header_solid />
              <RecentlyBooked />
              <Footer />
            </Route>

            <Route path="/Hotel">
              <Header_solid />
              <Hotel />
              <Footer />
            </Route>

            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;

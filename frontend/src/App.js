import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Hotel from "./screens/Hotel";
import Wishlist from "./screens/Wishlist";
import ListingInput from "./screens/ListingInput";
import RecentlyBooked from "./screens/RecentlyBooked";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import HeaderSolid from "./components/HeaderSolid";
import Footer from "./components/Footer";
import ListingsPage from "./screens/ListingsPage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="app">
      <Toaster />
        <ScrollToTop>
          <Switch>
            <Route path="/ListingsPage">
              <Header />
              <ListingsPage />
              <Footer />
            </Route>
            <Route path="/ListingInput">
              <HeaderSolid />
              <ListingInput />
              <Footer />
            </Route>
            <Route path="/Wishlist">
            <HeaderSolid/>
            <Wishlist/>
            <Footer/>
            </Route>
            <Route path="/Login">
              <Login />
            </Route>

            <Route path="/Profile">
              <HeaderSolid />
              <Profile />
              <Footer />
            </Route>

            <Route path="/RecentlyBooked">
              <HeaderSolid />
              <RecentlyBooked />
              <Footer />
            </Route>

            <Route path="/Hotel">
              <HeaderSolid />
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

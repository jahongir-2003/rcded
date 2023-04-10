import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuideServise from "./pages/GuideServise";
import Contact from "./pages/Contact";
import Footer from "./header-footer/Footer";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import GuidWorks from "./components/GuidWorks";

// import toshkent from "./regionPhoto/toshkentPhoto.jpeg";
// import { useState } from "react";
// import axios from "axios";

function App() {

  return (
    <BrowserRouter>
      <div className="App container-fluid p-0">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/guideservise" component={GuideServise} exact />
          <Route path="/contact" component={Contact} exact />
          <Route exact path="/city/:id" component={ComponentA}/>
          <Route exact path="/guid/:id" component={ComponentB}/>
          <Route exact path="/guid_works/:id" component={GuidWorks}/>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>

    
  );
}

export default App;

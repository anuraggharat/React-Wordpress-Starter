import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Pagenotfound from "./pages/404";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog/:slug" exact component={Blog} />
            <Route path="/about" exact component={About} />

            <Route exact component={Pagenotfound} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;

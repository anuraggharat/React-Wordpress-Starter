import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Pagenotfound from './pages/404';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog/:slug" exact component={Blog} />
          <Route exact component={Pagenotfound} />

        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;

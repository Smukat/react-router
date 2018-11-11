import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Teachers from './components/Teachers';
import About from './components/About';
import Courses from './components/Courses';
import NotFound from './components/NotFound';
import Featured from './components/Featured';

const App = () => (
  <BrowserRouter basename="/react&#45;router">
    <div className="container">
    <Header />
    {/* Switch goes through each Route looking for the specific
    path. If the first one isn't, it checks the second one, etc.
    The default case is the one without path. */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/teachers" component={Teachers} />
      <Route path="/teachers/:topic/:name" component={Featured} />
      <Route path="/courses" component={Courses} />
      <Route component={NotFound}/>
    </Switch>
    </div>
  </BrowserRouter>
);

export default App;
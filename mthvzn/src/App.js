import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Homepage} from './pages/Homepage';
import {MandelbrotPage} from './pages/MandelbrotPage';
import {FibonacciPage} from './pages/FibonacciPage';
import {PascalPage} from './pages/PascalPage';

export class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>

          <Route path='/pascal'>
            <PascalPage/>
          </Route>

          <Route path='/fibonacci'>
            <FibonacciPage/>
          </Route>

          <Route path='/mandelbrot'>
            <MandelbrotPage/>
          </Route>

          <Route path='/'>
            <Homepage/>
          </Route>

        </Switch>
      </Router>
    );
  }
}

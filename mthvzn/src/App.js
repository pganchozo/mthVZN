import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Homepage} from './pages/Homepage';

export class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route path='/'>
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

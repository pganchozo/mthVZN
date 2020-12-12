import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import Fibonacci from '../components/Fibonacci';

export class FibonacciPage extends React.Component {
  render(){
    return(
      <Container fixed>
        <NavBar />
        <Fibonacci />
      </Container>
    );
  }
}

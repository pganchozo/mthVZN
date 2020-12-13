import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import Mandelbrot from '../components/Mandelbrot';

export class MandelbrotPage extends React.Component {
  render(){
    return(
      <Container fixed>
        <NavBar />
        <Mandelbrot />
      </Container>
    );
  }
}

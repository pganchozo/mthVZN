import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import Pascal from '../components/Pascal';

export class PascalPage extends React.Component {
  render(){
    return(
      <Container fixed>
        <NavBar />
        <Pascal />
      </Container>
    );
  }
}

import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';

export class Homepage extends React.Component {
  render(){
    return(
      <Container fixed>
        <NavBar />
      </Container>
    );
  }
}

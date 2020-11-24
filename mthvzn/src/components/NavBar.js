import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = {
  navBar: {
    backgroundColor: '#9A1750',
  },
  homeButton: {
    marginRight: 100,
    padding: '10px 14px',
    color: 'white',
  },
  menuButton: {
    padding: '10px 14px',
    color: 'white',
  },
}

class NavBar extends React.Component {
  render() {

    const { classes } = this.props;

    return(
      <Container fixed>
        <AppBar className={classes.navBar}>
          <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          >
            <Button className={classes.homeButton}>Home</Button>
            <Button className={classes.menuButton}>Fibonacci Sequence</Button>
            <Button className={classes.menuButton}>Pascal's Triangle</Button>
            <Button className={classes.menuButton}>Mandelbrot Sets</Button>
          </Grid>
        </AppBar>
      </Container>
    );
  }
}

export default withStyles(styles)(NavBar);

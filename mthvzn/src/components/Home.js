import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  paper: {
    margin: '20px',
  }
}

class Home extends React.Component {
  render(){

    const { classes } = this.props;

    return(
      <Paper elevation={2} className={classes.paper}>
        <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
        >
          <Typography variant='h5'>
            Welcome to mthVZN!
          </Typography>
          <p>(Explain app here)</p>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Home);

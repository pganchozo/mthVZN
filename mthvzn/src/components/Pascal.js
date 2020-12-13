import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {PascalChart} from '../charts/PascalChart';

const styles = {
  paper: {
    margin: '20px',
  }
}

class Pascal extends React.Component {

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
            Pascal Triangle Visualization
          </Typography>
          <p>(Explain app here)</p>

          <PascalChart />

          <Typography variant='h6'>
            References
          </Typography>

        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Pascal);

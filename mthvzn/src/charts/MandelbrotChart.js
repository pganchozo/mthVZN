import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import {
  XYPlot,
  Borders,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from 'react-vis';
import 'react-vis/dist/style.css';

export class MandelbrotChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: [], slider_val: 3};
  }

  createData = () => {
    var data_points = [];

    this.setState({data: data_points});
  }

  handleSliderChange = (e, value) => {
    this.setState({slider_val: value});
    this.createData();
  };

  componentDidMount(){
    this.createData();
  }

  render(){
    return(
      <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      >
        <XYPlot width={500} height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />

      </XYPlot>

      <Slider
          value={this.state.slider_val}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={15}
          onChange={this.handleSliderChange}
      />
    </Grid>
    );
  }
}

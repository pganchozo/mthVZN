import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import {
  XYPlot,
  XAxis,
  YAxis,
  Borders,
  VerticalGridLines,
  HorizontalGridLines,
  HeatmapSeries,
} from 'react-vis';
import 'react-vis/dist/style.css';

export class PascalChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 0, y: 2}], slider_val: 3};
  }

  calcPascals = (numRows) => {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    console.log(result)
    return result;
  }

  createData = () => {
    var data_points = [];
    const rows = this.calcPascals(this.state.slider_val);

    // push base case, the "tip" of Pascal's triangle
    var start = 0;
    var end = 0;
    data_points.push({x: 0, y: 0});

    for(var i = 1; i < rows.length; i++) {
      for (var j = 0; j < rows[i].length; j++) {
        if (j == 0) data_points.push({x: j+start, y: i});
        else data_points.push({x: j+start+1, y: i});
      }
      start--;
    }

    console.log(data_points)
    this.setState({data: data_points});
  }

  handleSliderChange = (e, value) => {
    this.setState({slider_val: value});
    // this.createData();
  };

  componentDidMount(){
    // this.createData();
  }

  render(){
    return(
      <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      >
        <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={500} height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <HeatmapSeries
            animation
            className='pascals'
            radius={20}
            colorRange={['orange', 'cyan']}
            data={this.state.data}
          />
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

import React from 'react'
import PropTypes from 'prop-types';
import { Polar } from 'react-chartjs-2';

export function PolarChart(props) {

  function generateGraph() {
    const colorVal = `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`;
    return {
      labels: props.labels,
      datasets: [
        {
          label: props.title,
          fill: false,
          lineTension: 0.5,
          backgroundColor: colorVal,
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: props.data
        }
      ]
    }
  }

  return (
    <Polar data={generateGraph} />)
}


PolarChart.propTypes = {
  labels: PropTypes.array,
  title: PropTypes.string,
  data: PropTypes.array,
  options: PropTypes.any
};

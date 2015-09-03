import React, { Component } from 'react';
import { Spring } from 'react-motion';
import { rgbToHex, interpolateColor } from '../utils/colors';

const colors = {
  base00: '#2d2d2d',
  base01: '#393939',
  base02: '#515151',
  base03: '#747369',
  base04: '#a09f93',
  base05: '#d3d0c8',
  base06: '#e8e6df',
  base07: '#f2f0ec',
  base08: '#f2777a',
  base09: '#f99157',
  base0A: '#ffcc66',
  base0B: '#99cc99',
  base0C: '#66cccc',
  base0D: '#6699cc',
  base0E: '#cc99cc',
  base0F: '#d27b53'
};

class Square {
  render() {
    const { position } = this.props;
    return (
      <box top="center"
           left={`${position}%`}
           width="50%"
           height="50%"
           border={{type: 'line'}}
           style={{
             bg: interpolateColor(
               position,
               colors.base01,
               colors.base0A,
               0, 50
             ),
             border: {fg: 'blue'}}
           } />
    );
  }
}

export default class AnimatedBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0
    };

    setInterval(() => {
      this.setState({
        position: this.state.position > 25 ?
          0 :
          50
      });
    }, 500);
  }

  render() {
    return (
      <Spring endValue={this.state.position}>
        {val => <Square position={val} />}
      </Spring>
    );
  }
}
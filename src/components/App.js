import React, {Component} from 'react';
import InnerBox from './InnerBox';
import ProgressBar from './ProgressBar';
import AnimatedBox from './AnimatedBox';

export default class App extends Component {
  render() {
    return (
      <box label='React Blessed Hot Motion'
           border={{type: 'line'}}
           style={{border: {fg: 'cyan'}}}>
        <InnerBox position="left">
          <AnimatedBox />
        </InnerBox>
        <InnerBox position="right">
          Lol.
        </InnerBox>
        <ProgressBar />
        Random text here...
      </box>
    );
  }
}
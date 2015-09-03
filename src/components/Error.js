import React, {Component} from 'react';

export default class Error extends Component {
  render() {
    return (
      <box label='!!! ERROR !!!'
           border={{type: 'line'}}
           style={{border: {fg: 'red'}}}>
        {this.props.error.toString()}
      </box>
    );
  }
}
import React, { Component } from 'react';

export default class InnerBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hey: true
    };

    setInterval(() => {
      this.setState({hey: !this.state.hey});
    }, 1000);
  }

  render() {
    const position = this.props.position;

    const left = position === 'left' ? '2%' : '53%';

    return (
      <box label={this.state.hey ? 'First step' : 'Second step'}
           ref="box"
           left={left}
           width='45%'
           height="70%"
           top="10%"
           border={{type: 'line'}}
           style={{border: {fg: 'green'}}}>
        {this.props.children}
      </box>
    );
  }
}

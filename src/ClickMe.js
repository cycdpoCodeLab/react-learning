import React from 'react';

export default class ClickMe extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  };

  render() {
    const title = 'Click Me';
    return (
      <h2 onClick={this.handleClickOnClickMe.bind(this)}>{title} {this.state.count}</h2>
    );
  };

  handleClickOnClickMe() {
    this.setState({
      count: this.state.count + 1
    });
  };
};
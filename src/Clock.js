import React from 'react';

class ClockShow extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  };

  render() {
    return (
      <p>现在的时间是: {this.state.date.toLocaleTimeString()}</p>
    );
  };

  componentWillMount() {
    let _timer = () => this.timer = setTimeout(() => {
      this.setState({
        date: new Date()
      });
      _timer();
    }, 1e3);

    _timer();
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  };
}


export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowClock: true
    };
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowOrHide.bind(this)}>{this.state.isShowClock ? '隐藏' : '显示'}</button>
        {this.state.isShowClock ? <ClockShow/> : null}
      </div>
    );
  };

  handleShowOrHide() {
    this.setState({
      isShowClock: !this.state.isShowClock
    });
  };

};
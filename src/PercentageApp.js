import React, {Component} from 'react';


class Input extends Component {
  render() {
    return (
      <div>
        <input
          type='number'
          onChange={this.handleInputChange.bind(this)}/>
      </div>
    );
  };

  handleInputChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  };
}

class PercentageShower extends Component {
  static defaultProps = {
    num: ''
  };

  render() {
    const percent = this.props.num
      ? (Number(this.props.num) * 100).toFixed(2) + '%'
      : '';
    return (
      <div>{percent}</div>
    );
  };
}

class PercentageApp extends Component {
  constructor() {
    super();
    this.state = {
      num: ''
    };
  };

  render() {
    return (
      <div className="wrapper">
        <Input
          onChange={this.handleInputChange.bind(this)}/>
        <PercentageShower
          num={this.state.num}/>
      </div>
    );
  };

  handleInputChange(num) {
    this.setState({num});
  };
}

export default PercentageApp;

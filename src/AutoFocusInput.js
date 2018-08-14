import React from 'react';

export default class AutoFocusInput extends React.Component {
  render() {
    return (
      <input ref={input => this.input = input}/>
    );
  };

  componentDidMount() {
    this.input.focus();
  };
};
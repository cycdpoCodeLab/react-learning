import React from 'react';
import './BlackBorderContainer.css';

export default class BlackBorderContainer extends React.Component {
  render() {
    return (
      <div className="black-border">{this.props.children}</div>
    );
  };
};
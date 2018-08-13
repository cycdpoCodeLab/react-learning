import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Title from './Title';
import ClickMe from './ClickMe';
import NotificationsCount from './NotificationsCount';
import List from './List';
import Clock from './Clock';

class App extends React.Component {
  constructor() {
    super();
    console.log('construct');
  };

  componentWillMount() {
    console.log('component will mount');
  };

  componentDidMount() {
    console.log('component did mount');
  };

  componentWillUnmount() {
    console.log('component will unmount');
  };

  render() {
    console.log('render');
    return (
      <div>
        <Title title="React Learning"/>
        <ClickMe/>
        <NotificationsCount/>
        <List/>
        <Clock/>
      </div>
    );
  };
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);



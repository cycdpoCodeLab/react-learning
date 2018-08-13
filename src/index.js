import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Title from './Title';
import ClickMe from './ClickMe';
import NotificationsCount from './NotificationsCount';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title title="React Learning"/>
        <ClickMe/>
        <NotificationsCount/>
        <List/>
      </div>
    );
  };
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);



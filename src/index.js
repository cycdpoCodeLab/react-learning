import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Title from './Title';
import ClickMe from './ClickMe';
import NotificationsCount from './NotificationsCount';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title title="React Learning"/>
        <ClickMe/>
        <NotificationsCount/>
      </div>
    );
  };
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);



import React from 'react';

export default class NotificationsCount extends React.Component {
  static getNotificationsCount() {
    return Math.floor(Math.random() * 10);
  };

  render() {
    return (
      <span>{
        (() => {
          let n = NotificationsCount.getNotificationsCount();
          console.log(n);
          if (n > 0) {
            return `有${n}条未读消息`;
          }

          return '没有未读消息';
        })()
      }</span>
    );
  };
};


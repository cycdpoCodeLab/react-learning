import React, {Component} from 'react';

// mock post func
const getPostData = () => new Promise(resolve => {
  const random = Math.random();

  setTimeout(() => resolve({
    content: '接收到的内容:' + String(random).replace(/^.{2}/g, '')
  }), random * 5e3);
});

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };
  };

  componentWillMount() {
    return this.handleFresh();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleFresh.bind(this)}>刷新</button>
        <span>{this.state.content}</span>
      </div>
    );
  };

  async handleFresh() {
    await this.setState({
      content: '数据加载中…'
    });

    const msg = await getPostData();
    this.setState(msg);
  };
};
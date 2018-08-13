import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  };

  render() {
    return (
      <div className="wrapper">
        <CommentInput
          onSubmit={this.handleInputSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  };

  handleInputSubmitComment(comment) {
    if (!comment) {
      return;
    }

    if (!comment.username) {
      return alert('请输入用户名');
    }

    if (!comment.content) {
      return alert('请输入评论内容');
    }

    let _comments = this.state.comments;
    _comments.push(comment);

    this.setState({
      comments: _comments
    });
  };
};
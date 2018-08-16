import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class CommentList extends React.Component {
  static defaultProps = {
    comments: []
  };

  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  };

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  };

  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) => (
          <Comment
            comment={comment}
            key={index}
            index={index}
            onDeleteComment={this.handleDeleteComment.bind(this)}
          />
        ))}
      </div>
    );
  };
};
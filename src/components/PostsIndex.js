import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () =>
    _.map(this.props.posts, post => (
      <ul key={post.id} className="list-group-item">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </ul>
    ));

  render() {
    return (
      <div className="push-down">
        <div className="push-up">
          <div className="pull-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
          </div>
          <h3>Posts</h3>
        </div>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  };
}

export default connect(mapStateToProps, actions)(PostsIndex);

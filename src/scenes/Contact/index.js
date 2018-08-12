import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBlogPost } from '../../services/wordpress/actions';
import './styles.css';

class Contact extends Component {
  componentDidMount() {
    this.props.getBlogPost('contact-me');
  }

  render() {
    const { blogPost, hasErrored, isLoading } = this.props;
    const blogContent = blogPost.content;

    if (isLoading || hasErrored) {
      return (
        <div className="Contact"></div>
      );
    }

    return (
      <div className="Contact">
        <div className="content" dangerouslySetInnerHTML={{__html: blogContent}} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blogPost: state.blogPost,
    hasErrored: state.blogPostFetchError,
    isLoading: state.blogPostIsLoading
  };
}

export default connect(mapStateToProps, { getBlogPost })(Contact);

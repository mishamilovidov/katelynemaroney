import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBlogPost } from '../../services/wordpress/actions';
import './styles.css';

class About extends Component {
  componentDidMount() {
    this.props.getBlogPost('about-me');
  }

  render() {
    const { blogPost, hasErrored, isLoading } = this.props;
    const blogFeatureImage = blogPost.featured_image;
    const blogTitle = blogPost.title;
    const blogContent = blogPost.content;

    if (isLoading || hasErrored) {
      return (
        <div className="About"></div>
      );
    }

    return (
      <div className="About">
        <img
            src={blogFeatureImage}
            alt={blogTitle}
            onError={(e)=>{
              e.target.src="//dummyimage.com/400x400/e5e5e5/e5e5e5.png"
            }}
          />
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

export default connect(mapStateToProps, { getBlogPost })(About);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGallery } from './actions';
import Gallery from 'react-grid-gallery';
import './styles.css';

class Home extends Component {
  componentDidMount() {
    this.props.getGallery();
  }

  render() {
    const tagStyles ={
      color: "#d9d9d9",
      padding: "0px 8px",
      fontSize: "10px",
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }

    const { gallery, isLoading, hasErrored } = this.props;

    if (isLoading || hasErrored) {
      return (
        <div className="Gallery"></div>
      );
    }

    return (
      <div className="Gallery">
        <Gallery
          id="GridGallery"
          images={gallery}
          enableImageSelection={false}
          tagStyle={tagStyles}
          />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    gallery: state.gallery,
    hasErrored: state.galleryFetchError,
    isLoading: state.galleryIsLoading
  };
}

export default connect(mapStateToProps, { getGallery })(Home);

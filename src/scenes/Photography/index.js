import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotography } from './actions';
import Gallery from 'react-grid-gallery';
import './styles.css';

class Photography extends Component {
  componentDidMount() {
    this.props.getPhotography();
  }

  render() {
    const { photography, isLoading, hasErrored } = this.props;

    if (isLoading || hasErrored) {
      return (
        <div className="Photography">
          <div className="title">Photography</div>
        </div>
      );
    }

    return (
      <div className="Photography">
        <div className="title">Photography</div>
        <Gallery
          images={photography}
          enableImageSelection={false}
          />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    photography: state.photography,
    hasErrored: state.photographyFetchError,
    isLoading: state.photographyIsLoading
  };
}

export default connect(mapStateToProps, { getPhotography })(Photography);

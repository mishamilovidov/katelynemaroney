import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideos } from '../../services/vimeo/actions';
// import { Player } from 'video-react';
import './styles.css';

class Videos extends Component {
  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    const { videos } = this.props;

    if (_.isEmpty(videos, true)) {
      return (
        <div className="Videos"></div>
      );
    }

    return (
      <div className="Videos">
        {
          videos.data.map((video) => {
            return (
              <div className="video" key={video.uri}>
                <iframe src={`https://player.vimeo.com/video/${video.uri.split('/').pop()}`} title={video.title} width="100%" frameBorder="0" allowFullScreen></iframe>
              </div>
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    videos: state.videos,
    hasErrored: state.videosFetchError,
    isLoading: state.videosIsLoading
  };
}

export default connect(mapStateToProps, { getVideos })(Videos);

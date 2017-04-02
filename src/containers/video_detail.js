///////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class VideoDetail extends Component {

 render() {
  const video = this.props.video;
  if (!video) {
    return <div>...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-6">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
 }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props

  return {
    video: state.showVideo
  };
}

export default connect(mapStateToProps, null)(VideoDetail);

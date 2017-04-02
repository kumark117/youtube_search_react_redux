///////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { showVideo } from '../actions/index.js';

import { VideoListItem } from '../components/video_list_item';

class VideoList extends Component {

  videoItems() { 
	return this.props.videos.map((video, ix) => {
	return (
      <VideoListItem
        key={video.etag}
        onClickHandler={this.props.showVideo}
        video={video} />
    );
  });
}

render() {
  return (
    <ul className="col-md-4 list-group">
	{this.videoItems()}
    </ul>
  )
}

}

function mapStateToProps(state) {
  // Whatever is returned will show up as props

  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ showVideo: showVideo }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);

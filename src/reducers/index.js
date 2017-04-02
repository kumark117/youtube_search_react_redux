import { combineReducers } from 'redux';
import ReducerVideos from './reducer_videos';
import showVideo from './reducer_showvideo';

const rootReducer = combineReducers({
  videos: ReducerVideos,
  showVideo: showVideo
});

export default rootReducer;

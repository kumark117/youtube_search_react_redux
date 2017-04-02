import { FETCH_VIDEOS , RECEIVE_VIDEOS , REQUEST_VIDEOS } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
  case RECEIVE_VIDEOS:
    return [ ...action.videos ];
  }
  return state;
}

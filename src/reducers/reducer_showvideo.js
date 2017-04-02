import { SHOW_VIDEO} from '../actions/index';
// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
  case SHOW_VIDEO:
    return action.video;
  }

  return state;
}

import YTSearch from 'youtube-api-search';

//'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';
const API_KEY = "AIzaSyADUJf5gBWOlKpifE9bJeKfUxvroK94PJ8";

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const SHOW_VIDEO = 'SHOW_VIDEO';
export const RESET_ALL  = 'RESET_ALL';

export function requestVideos(term) {
    return {
        type: REQUEST_VIDEOS,
	term: term
    };
}

export function thunkRet_fetchVideos(term) {
  return dispatch => {
    dispatch(requestVideos(term));
    //alert("0000000000000 YTSearch nexxxxxtttt: term= "+term);
    if (term=="") {
      	//alert("0000000000000 YTSearch SUPRESSED: term= "+term);
	dispatch(receiveVideos([]));
      	dispatch(showVideo(null));
    }
    else {
    		YTSearch({key: API_KEY, term: term}, (videos) => {
      		//alert("11111111111111 YTSearch callback: videos length = "+videos.length);
      		dispatch(receiveVideos(videos));
      		dispatch(showVideo(videos[0] ? videos[0] : null));
  	});
    }
 }
}

export function receiveVideos(videos) {
    //alert("222222222222 : receiveVideos videos.length="+videos.length);
    return {
        type: RECEIVE_VIDEOS,
        videos: videos
    };
}

export function showVideo(video=null) {
    //alert("AAAAAAAAAAAAAAAAAAAAAAction showVideo (in Detail)");
 return {
            type: SHOW_VIDEO,
            video: video
 };
}
/* */
export function resetAll() {
    //alert("RESETTTTTTTTTTTTT ALLLLLLLLLLLL");
 return {
            type: RESET_ALL,
	    videos: [],
	    video: null
 };
}
/* * */

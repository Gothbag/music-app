import axios from "axios";

export const songActions = {
	UPDATE_SONGS: "songs/update",
	SET_PLAYED_SONG_ID: "song/played/id/set",
	SET_SONGS_ORDER: "song/order/set"
}

export const addSongs = payload => ({
	type: songActions.UPDATE_SONGS,
	payload
});

export const setSongsOrder = sortBy => ({
	type: songActions.SET_SONGS_ORDER,
	payload: sortBy
});

export const setPlayedSongId = id => ({
	type: songActions.SET_PLAYED_SONG_ID,
	payload: id
});

export const loadSongs = (searchTerm = "") => dispatch => axios.get(`https://itunes.apple.com/search?term=${searchTerm}&entity=song`)
  .then(data => {
  	dispatch(addSongs(data.data.results));
  })
  .catch(function (error) {
    console.log(error);
  });

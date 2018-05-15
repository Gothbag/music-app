import { createSelector } from "reselect";

const songListSelector = state.song.list;
const songIdSelector = state.song.selectedSongId;

export const selectedSongSelector = createSelector(
  songListSelector,
  songIdSelector,
  (songs, id) => Array.isArray(songs) && songs.length > 0 ? songs.filter(song => song.id == id)[0] : {}
)
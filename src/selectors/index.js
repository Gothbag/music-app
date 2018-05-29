import { createSelector } from "reselect";

const songListSelector = state => state.song.list;
const trackBeingPlayedIdSelector = state => state.song.trackBeingPlayedId;

export const selectedSongSelector = createSelector(
  songListSelector,
  trackBeingPlayedIdSelector,
  (songs, trackId) => Array.isArray(songs) && songs.length > 0 ? songs.filter(song => song.trackId == trackId)[0] : {}
)
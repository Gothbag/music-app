import { createSelector } from "reselect";
import {orderDirections} from "../helpers/constants";
import {orderBy} from "lodash";

const songListSelector = state => state.song.list;
const trackBeingPlayedIdSelector = state => state.song.trackBeingPlayedId;
const songsSortBy = state => state.song.sortBy;
const songsOrderDirection = state => state.song.orderDirection;

export const selectedSongSelector = createSelector(
  songListSelector,
  trackBeingPlayedIdSelector,
  (songs, trackId) => Array.isArray(songs) && songs.length > 0 ? songs.filter(song => song.trackId == trackId)[0] : {}
)

export const sortedSongsSelector = createSelector(
  songListSelector,
  songsSortBy,
  songsOrderDirection,
  (songs, sortBy, orderDirection) => Array.isArray(songs) ? orderBy(songs, [sortBy], [orderDirection]) : []
)

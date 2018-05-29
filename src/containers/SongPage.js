import { connect } from "react-redux"

import SongPage from "../components/SongPage";
import { loadSong, setPlayedSongId } from "../actions/songs";
import { selectedSongSelector, sortedSongsSelector } from "../selectors";

const mapStateToProps = state => ({
	song: selectedSongSelector(state),
    songs: sortedSongsSelector(state)
}); 

const mapDispatchToProps = dispatch => ({
	loadSong: trackId => dispatch(loadSong(trackId)),
    setPlayedTrackId: id  => dispatch(setPlayedSongId(id))
}); 


export default connect(mapStateToProps, mapDispatchToProps)(SongPage);
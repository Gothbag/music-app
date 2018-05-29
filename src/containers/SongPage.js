import { connect } from "react-redux"

import SongPage from "../components/SongPage";
import { setPlayedSongId } from "../actions/songs";
import { selectedSongSelector } from "../selectors";

const mapStateToProps = state => ({
	song: selectedSongSelector(state),
    songs: state.song.list
}); 

const mapDispatchToProps = dispatch => ({
    setPlayedTrackId: id  => dispatch(setPlayedSongId(id))
}); 


export default connect(mapStateToProps, mapDispatchToProps)(SongPage);
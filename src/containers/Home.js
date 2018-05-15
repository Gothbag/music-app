import { connect } from "react-redux"

import Home from "../components/Home";
import { loadSongs, setPlayedSongId } from "../actions/songs";

const mapStateToProps = state => ({
    songs: state.song.list,
    trackBeingPlayedId: state.song.trackBeingPlayedId
}); 

const mapDispatchToProps = dispatch => ({
    loadSongs: searchTerm => dispatch(loadSongs(searchTerm)),
    setPlayedTrackId: id  => dispatch(setPlayedSongId(id))
}); 


export default connect(mapStateToProps, mapDispatchToProps)(Home);
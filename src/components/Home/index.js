import React from "react";
import PropTypes from "prop-types";

import SongTable from "../SongTable";
import SearchBox from "../SearchBox";
import SongItem from "../SongItem";

class Home extends React.PureComponent {

	static propTypes = {
	    songs: PropTypes.arrayOf(PropTypes.shape({}))
  	}

  	static defaultProps = {
	    songs: []
  	}

	prepareSong = song => ({...song, onPlayButtonClick:this.selectSong, trackBeingPlayed: song.trackId===this.props.trackBeingPlayedId})

	selectSong = id => this.props.setPlayedTrackId(id);

	render() {
		const { prepareSong, props: { loadSongs, setSongsOrder, songs } } = this;

		return (<div>
				<SearchBox onSearch={loadSongs}/>
				<SongTable items={songs.map(prepareSong)} idProperty="trackId" itemCard={SongItem} setSongsOrder={setSongsOrder}/>
			</div>);
	}
}

export default Home;
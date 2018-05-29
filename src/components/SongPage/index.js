import React from "react";

import SongDetail from "../SongDetail";
import SongControls from "../SongControls";


class SongPage extends React.PureComponent {

	componentDidMount() {
		const { props: { loadSong, match, song } } = this;
		if (!song && match && match.params && match.params.trackId) {
			loadSong(match.params.trackId);
		}
	}

	render() {
		const { props: { setPlayedTrackId, song, songs } } = this;
		return (<div>
			<SongControls setPlayedTrackId={setPlayedTrackId} song={song} songs={songs}/>
			<SongDetail {...song}/>
		</div>);
	}
}

export default SongPage;
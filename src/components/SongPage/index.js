import React from "react";

import SongDetail from "../SongDetail";
import SongControls from "../SongControls";


class SongPage extends React.PureComponent {
	render() {
		const { props: { setPlayedTrackId, song, songs } } = this;
		return (<div>
			<SongControls setPlayedTrackId={setPlayedTrackId} song={song} songs={songs}/>
			<SongDetail {...song}/>
		</div>);
	}
}

export default SongPage;
import React from "react";

class SongDetail extends React.PureComponent {
	render() {
		const { props: { artworkUrl100, trackName, artistName, collectionName, primaryGenreName, releaseDate, trackPrice } } = this;
		return (<div className="text-center">
			<img src={artworkUrl100}/>
			<p>{`${artistName} - ${trackName}`}</p>
			<p>{collectionName}</p>
			<p>{primaryGenreName}</p>
			<p>{trackPrice}</p>
		</div>);
	}
}

export default SongDetail;
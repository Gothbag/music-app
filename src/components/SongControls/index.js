import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./SongControls.css";

class SongControls extends React.Component {

	state = {
	  	timeElapsed: this.props.timeElapsed
	};

	componentWillReceiveProps(nextProps) {

		if (!nextProps.songPlaying) {
			clearInterval(this.state.intervalId);
		}

	  	if (nextProps.songPlaying && nextProps.timeElapsed === 0) {
		    clearInterval(this.state.intervalId);
		    this.calculateTime();
	  	}	

	  	this.setState({
	    	timeElapsed: nextProps.timeElapsed
	  	});

	}

	calculateTime() {

	  	const intervalId  = setInterval(() => {
	    	if(this.state.timeElapsed === 30) {
		      	clearInterval(this.state.intervalId);
		      	this.props.stopSong();
	    	} else if(!this.props.songPaused) {
	      		this.props.increaseSongTime(this.state.timeElapsed + 1);
	    	}
	  	}, 1000);

	  	this.setState({
			intervalId: intervalId
	  	});

	}

	getSongIndex = () => {
	  	const { songs, song } = this.props;
	  	const currentIndex = songs.map((track, index) => {
	    	if(track.trackId === song.trackId) {
	      		return index;
	    	}
	  	}).filter(item => {
	    	return item !== undefined;
	  	})[0];

	  	return currentIndex;
	}

	nextSong = () => {
	  	const { props: { songs , setPlayedTrackId } } = this;
	  	let currentIndex = this.getSongIndex();
	  	currentIndex === songs.length - 1 ? setPlayedTrackId(songs[0].trackId) : setPlayedTrackId(songs[currentIndex + 1].trackId);
	}

	prevSong = () => {
	  	const { props: { songs , setPlayedTrackId } } = this;
	  	let currentIndex = this.getSongIndex();
	  	currentIndex === 0 ? setPlayedTrackId(songs[songs.length - 1].trackId) : setPlayedTrackId(songs[currentIndex - 1].trackId);
	}

	render() {
		const { props: { song: { artistName, trackName } } } = this;
  		const showPlay = this.props.songPaused ? "fa fa-play-circle-o play-btn" : "fa fa-pause-circle-o pause-btn";

	  	return (
	    	<div className="song-player-container">

	      		<div className="song-details">
        			<p className="song-name">{ trackName }</p>
		        	<p className="artist-name">{ artistName }</p>
		      	</div>

	      		<div className="song-controls">

	        	<div onClick={this.prevSong} className="reverse-song">
	          		<i className="fa fa-step-backward reverse" aria-hidden="true" />
	        	</div>

	        	<div className="play-btn">
	          		<i onClick={!this.props.songPaused ? this.props.pauseSong : this.props.resumeSong} className={"fa play-btn" + showPlay} aria-hidden="true" />
	        	</div>

	        	<div onClick={this.nextSong} className="next-song">
	          		<i className="fa fa-step-forward forward" aria-hidden="true" />
	        	</div>

	      	</div>

	      	<div className="song-progress-container">
	        	<p className="timer-start">{ moment().minutes(0).second(this.state.timeElapsed).format("m:ss") }</p>
	        	<div className="song-progress">
	          		<div style={{ width: this.state.timeElapsed * 16.5 }} className="song-expired" />
    			</div>
	        	<p className="timer-end">{ moment().minutes(0).second(30 - this.state.timeElapsed).format("m:ss") }</p>
	      	</div>

	    </div>
	  );
	}
}

SongControls.propTypes = {
  timeElapsed: PropTypes.number,
  song: PropTypes.shape({
  	artistName: PropTypes.string,
  	trackName: PropTypes.string
  }),
  songPlaying: PropTypes.bool,
  songPaused: PropTypes.bool,
  stopSong: PropTypes.func,
  resumeSong: PropTypes.func,
  increaseSongTime: PropTypes.func,
  pauseSong: PropTypes.func,
  songs: PropTypes.array,
  songDetails: PropTypes.object,
  setPlayedTrackId: PropTypes.func
};

export default SongControls;
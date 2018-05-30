import React from "react";
import PropTypes from "prop-types";

import "./Home.css";

import Table from "../Table";
import SearchBox from "../SearchBox";
import SongItem from "../SongItem";

class Home extends React.PureComponent {

	static propTypes = {
	    songs: PropTypes.arrayOf(PropTypes.shape({}))
  	}

  	static defaultProps = {
	    songs: []
  	}

  	constructor(props) {
	    super(props);

	    this.state = {
	    	cols: [
		    	{},
		    	{text:"Title", className:"song-title"}, 
		    	{text:"Artist"},
		    	{text:"Album"},
		    	{text:"Release Date"},
		    	{text:"Genre", sortBy: true, id: "primaryGenreName"},
		    	{text:"Length", sortBy: true, id: "trackTimeMillis"},
		    	{text:"Price", sortBy: true, id:"trackPrice"},
		    	{}
	    	]
	    }
	}

	render() {
		const { props: { loadSongs, setSongsOrder, songs }, state: { cols } } = this;

		return (<div>
				<SearchBox onSearch={loadSongs}/>
				<Table items={songs} idProperty="trackId" itemCard={SongItem} cols={cols} setOrder={setSongsOrder}/>
			</div>);
	}
}

export default Home;
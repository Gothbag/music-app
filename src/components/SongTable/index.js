import React from "react";
import PropTypes from "prop-types";
import {Table} from "react-bootstrap";

import "./SongTable.css";

import SortTh from "../SortTh";

class SongTable extends React.PureComponent {
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

	static propTypes = {
	    idProperty: PropTypes.string
  	}

  	static defaultProps = {
	    idProperty: "id"
  	}

  	setSongsOrder = id => () => this.props.setSongsOrder(id)

  	prepareHeader = header => {
  		const headerText = header.text ? header.text : "";
  		if (header.sortBy) {
  			return (<SortTh onClick={this.setSongsOrder(header.id)}>{headerText}</SortTh>);
  		}
  		return (<th>{headerText}</th>);
  	}

	render() {
		const { prepareHeader, props: { idProperty, itemCard: ItemCard, items }, state: { cols } } = this;

		return (<Table striped bordered condensed hover>
			<thead>
				<tr>
			      {cols.map(prepareHeader)}
			    </tr>
			</thead>
			<tbody>
				{items.map((item, i) => <ItemCard {...item} key={item[idProperty] || i}/>)}
			</tbody>
		</Table>)
	}
}

export default SongTable;
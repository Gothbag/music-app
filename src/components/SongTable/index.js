import React from "react";
import PropTypes from "prop-types";
import {Table} from "react-bootstrap";
import "./SongTable.css";

class SongTable extends React.PureComponent {

	static propTypes = {
	    idProperty: PropTypes.string
  	}

  	static defaultProps = {
	    idProperty: "id"
  	}

	render() {
		const { props: { idProperty, itemCard: ItemCard, items } } = this;
		return (<Table striped bordered condensed hover>
			<thead>
				<tr>
			      <th></th>
			      <th className="song-title">Title</th>
			      <th>Artist</th>
			      <th>Album</th>
			      <th>Release Date</th>
			      <th>Genre</th>
			      <th>Length</th>
			      <th>Price</th>
			    </tr>
			</thead>
			<tbody>
				{items.map((item, i) => <ItemCard {...item} key={item[idProperty] || i}/>)}
			</tbody>
		</Table>)
	}
}

export default SongTable;
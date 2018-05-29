import React from 'react'
import FontAwesome from "react-fontawesome";
import {orderDirections} from "../helpers/constants";

class SongItem extends React.PureComponent {

	render() {
		const { props: { sort, orderDirection } } = this;
		return(<th>
			{this.props.children}
			{sort && <FontAwesome name={orderDirection == orderDirections.ASC ? "angle-up" : "angle-down"}/>}
		</th>)
	}

}
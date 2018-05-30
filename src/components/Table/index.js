import React from "react";
import PropTypes from "prop-types";
import {Table} from "react-bootstrap";

import SortTh from "../SortTh";

class TableComp extends React.PureComponent {
	static propTypes = {
	    idProperty: PropTypes.string
  	}

  	static defaultProps = {
	    idProperty: "id"
  	}

  	setOrder = id => () => this.props.setOrder(id)

  	prepareHeader = header => {
  		const headerText = header.text ? header.text : "";
  		if (header.sortBy) {
  			return (<SortTh onClick={this.setOrder(header.id)}>{headerText}</SortTh>);
  		}
  		return (<th>{headerText}</th>);
  	}

	render() {
		const { prepareHeader, props: { cols, idProperty, itemCard: ItemCard, items } } = this;

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

export default TableComp;
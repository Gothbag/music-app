import React from 'react'
import FontAwesome from "react-fontawesome";
import { FormControl, FormGroup, InputGroup } from "react-bootstrap";


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    onSearchTextChange = e => {
        this.setState({ input : e.target.value });
    }

    onSearchTextKeyPress = ev => {
        if(ev.key === "Enter") { 
            ev.preventDefault();
            this.props.onSearch(this.state.input);
        } 
    }

    onSearchButtonClick = searchActive => e => {
        const { props: { onSearch } } = this;
        if (searchActive) {
            onSearch("");
            this.setState({ input : "" });
        } else {
            onSearch(this.state.input);
        }
    }

    render() {
        const { onSearchButtonClick, onSearchTextChange, onSearchTextKeyPress, state: { input } } = this;
        const searchActive = input + "".trim() !== "";
        return (
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" value={this.state.input} onChange={onSearchTextChange} onKeyPress={onSearchTextKeyPress}/>
                    <InputGroup.Addon onClick={onSearchButtonClick(searchActive)}>
                        <FontAwesome name={searchActive ? "close" : "search"}/>
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
        );
    }
    
};

export default SearchBox;
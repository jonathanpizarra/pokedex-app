import React, {Component} from 'react';

class SearchBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            type : props.type
        }
    }

    componentDidUpdate(prev){
        if(prev.type !== this.props.type){
            let type = this.props.type;
            type = type[0].toUpperCase() + type.substring(1);

            this.setState({
                type : type
            })
        }
    }

    render(){

        return(
            <div className='search-container'>
                <input className='search-input' placeholder={`Search ${this.state.type} Pokémons here`} type="search" value={this.props.query}  onChange={this.props.onTextChange} />
            </div>
        )
    }
}

export default SearchBox;

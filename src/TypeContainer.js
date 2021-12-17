import React, {Component} from 'react';
import Type from './Type';


class TypeContainer extends Component{
    constructor(){
        super();
        this.state = {
            types : [],
            types_url : [],
            active: 13
        }
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    types : res.results.map(type=> type.name),
                    types_url : res.results.map(type=>type.url)
                })

            })
    }

    onTypeClick = (type)=>{
        this.props.onTypeClick(type);
    }


    render(){
        return(
            <div className='type-container'>
                {
                    this.state.types.map( (type, i) => {
                        return <Type key={type} type={type} index={i} onTypeClick={()=>{this.props.onTypeClick(this.state.types_url[i])}}/>
                    })
                }
            </div>
        )
    }
}

export default TypeContainer;
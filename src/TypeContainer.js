import React, {Component} from 'react';
import Type from './Type';


class TypeContainer extends Component{
    constructor(){
        super();
        this.state = {
            types : [],
            types_url : [],
            selected_type : 13
        }
        
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    types : res.results.map(type=> type.name),
                    types_url : res.results.map(type=>type.url)
                },()=>{
                    let type = this.state.types[this.state.selected_type-1];
                    document.querySelector(`.type-${type} .type-hidden`).classList.add('animate-hidden');
                    document.querySelector(`.type-${type}`).classList.add('selected-type');
                })

            })
    }

    onTypeClick = (id)=>{
        this.props.onTypeClick(this.state.types_url[id-1]);
        let type = this.state.types[this.state.selected_type-1];
        document.querySelector(`.type-${type} .type-hidden`).classList.remove('animate-hidden');
        document.querySelector(`.type-${type}`).classList.remove('selected-type');
        this.setState({
            selected_type : id
        }, ()=>{
            type = this.state.types[this.state.selected_type-1];
            document.querySelector(`.type-${type} .type-hidden`).classList.add('animate-hidden');
            document.querySelector(`.type-${type}`).classList.add('selected-type');
        })
    }


    render(){
        return(
            <div className='type-container'>
                {
                    this.state.types.map( (type, i) => {
                        return <Type key={type} type={type} index={i+1} onTypeClick={this.onTypeClick}/>
                    })
                }
            </div>
        )
    }
}

export default TypeContainer;
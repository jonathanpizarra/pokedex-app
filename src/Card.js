import React, {Component} from 'react';
import Stats from './Stats';
import pokeball from './pokeball.png';

class Card extends Component{

    constructor(props){
        super(props);
        this.state = {
            pic_url : "",
            stats : [],
            id : 0
        }

    }

    componentDidUpdate(prev){
        if(prev.url !== this.props.url || prev.type !== this.props.type){
            fetch(this.props.url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pic_url : res.sprites.other["official-artwork"].front_default,
                    stats : res.stats.map(s => {return { [s.stat.name] : s.base_stat} }),
                    id : res.id
                });
            })
        }
    }

    componentDidMount(){
        fetch(this.props.url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pic_url : res.sprites.other["official-artwork"].front_default,
                    stats : res.stats.map(s => {return { [s.stat.name] : s.base_stat} }),
                    id : res.id
                });
            })
    }
        
    render(){
        let name = this.props.name.split("-").map(v=>v[0].toUpperCase() + v.substring(1) ).join(" ");

        return(
            <div className="card">
                <div className='card-img-container'>
                    <img className="card-img" src={this.state.pic_url || pokeball} alt={this.props.name} />
                </div>
                <h4 className='pokemon-name'>{name}</h4>
                <h5 className='pokemon-id'>#{this.state.id}</h5>
                <Stats stats={this.state.stats}/>
            </div>
        )
    }
}

export default Card;
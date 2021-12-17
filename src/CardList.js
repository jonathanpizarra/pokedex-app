import React, {Component} from 'react';
import Card from './Card';


class CardList extends Component {
    
    constructor(props){
        super(props);
        let startIndex = (props.page-1) * 9;
        let endIndex = startIndex + 9;
        let pagePokemons = [];
        let pageUrls = [];
        for(let i = startIndex; i < endIndex; i++){
            pagePokemons.push(props.pokemons[i]);
            pageUrls.push(props.urls[i]);
        }

        this.state = {
            pokemons: pagePokemons,
            urls: pageUrls
        }

    }

    componentDidMount(){
        let startIndex = (this.props.page-1) * 12;
        let endIndex = (startIndex + 12 > this.props.pokemons.length? this.props.pokemons.length : startIndex + 12);
        let pagePokemons = [];
        let pageUrls = [];
    
        for(let i = startIndex; i < endIndex; i++){
            pagePokemons.push(this.props.pokemons[i]);
            pageUrls.push(this.props.urls[i]);
        }

        this.setState({
            pokemons: pagePokemons,
            urls: pageUrls
        })
    }

    componentDidUpdate(prev){
        if(prev.page !== this.props.page || prev.type !== this.props.type){
            let startIndex = (this.props.page-1) * 12;
            let endIndex = (startIndex + 12 > this.props.pokemons.length? this.props.pokemons.length : startIndex + 12);
            let pagePokemons = [];
            let pageUrls = [];
            for(let i = startIndex; i < endIndex; i++){
                pagePokemons.push(this.props.pokemons[i]);
                pageUrls.push(this.props.urls[i]);
            }

            this.setState({
                pokemons: pagePokemons,
                urls: pageUrls
            })

        }
    }


    render(){
        return (
            <div className='card-list'>
                {       
                    this.state.pokemons.map( (p, i) => {
                        return <Card key={i} name={p} type={this.props.type} url={this.state.urls[i]}/>
                    })
                }
            </div>
        )
    }

    
}

export default CardList;
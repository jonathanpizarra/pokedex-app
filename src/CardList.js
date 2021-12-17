import React, {Component} from 'react';
import Card from './Card';
import Empty from './Empty';

class CardList extends Component {
    
    constructor(props){
        super(props);

        this.page_item_count = 12;

        let filtered = [];
        let urls = [];
        for(let i in props.pokemons){
            if(props.pokemons[i].toLowerCase().includes(props.query) ){
                filtered.push(props.pokemons[i]);
                urls.push(props.urls[i]);
            }
        }

        let len = filtered.length;
        let startIndex = (props.page-1) * this.page_item_count;
        let endIndex = (startIndex + this.page_item_count > len? len : startIndex + this.page_item_count);
        let pagePokemons = [];
        let pageUrls = [];
        for(let i = startIndex; i < endIndex; i++){
            pagePokemons.push(filtered[i]);
            pageUrls.push(urls[i]);
        }

        this.state = {
            filtered : filtered,
            pagePokemons: pagePokemons,
            pageUrls: pageUrls
        }

        props.notifyPages(filtered.length);

    }


    componentDidMount(){
        let filtered = [];
        let urls = [];
        for(let i in this.props.pokemons){
            if(this.props.pokemons[i].toLowerCase().includes(this.props.query) ){
                filtered.push(this.props.pokemons[i]);
                urls.push(this.props.urls[i]);
            }
        }

        let len = filtered.length;
        let startIndex = (this.props.page-1) * this.page_item_count;
        let endIndex = (startIndex + this.page_item_count > len? len : startIndex + this.page_item_count);
        let pagePokemons = [];
        let pageUrls = [];
    
        for(let i = startIndex; i < endIndex; i++){
            pagePokemons.push(filtered[i]);
            pageUrls.push(urls[i]);
        }

        this.setState({
            filtered: filtered,
            pagePokemons: pagePokemons,
            pageUrls: pageUrls
        })

        this.props.notifyPages(filtered.length);
    }

    componentDidUpdate(prev){
        if(prev.page !== this.props.page || prev.type !== this.props.type || prev.query !== this.props.query){
            
            let filtered = [];
            let urls = [];
            for(let i in this.props.pokemons){
                if(this.props.pokemons[i].toLowerCase().includes(this.props.query) ){
                    filtered.push(this.props.pokemons[i]);
                    urls.push(this.props.urls[i]);
                }
            }

            let len = filtered.length;
            let startIndex = (this.props.page-1) * this.page_item_count;
            let endIndex = (startIndex + this.page_item_count > len? len : startIndex + this.page_item_count);
            let pagePokemons = [];
            let pageUrls = [];
        
            for(let i = startIndex; i < endIndex; i++){
                pagePokemons.push(filtered[i]);
                pageUrls.push(urls[i]);
            }

            this.setState({
                filtered: filtered,
                pagePokemons: pagePokemons,
                pageUrls: pageUrls
            })

            if(prev.query !== this.props.query){
                this.props.notifyPages(filtered.length);
            }
            
        }
    }


    render(){
        return (
            <div className='card-list' >
                {       
                    this.state.pagePokemons.length === 0 ?
                    <Empty/> : 
                    this.state.pagePokemons.map( (p, i) => {
                        return <Card key={i} name={p} type={this.props.type} url={this.state.pageUrls[i]}/>
                    })
                }
            </div>
        )
    }

    
}

export default CardList;
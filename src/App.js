import React, {Component} from 'react';
import TypeContainer from './TypeContainer';
import Pages from './Pages';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Empty from './Empty'
import './App.css';
import colors from './colors';
class App extends Component{

    constructor(){
        super();

        this.state = {
            pokemons : [],
            urls : [],
            type : "",
            page : 1,
            query : "",
            count : 0
        }        

    }

    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/type/13/")
        .then(res => res.json())
        .then(res =>{
            this.setState({
                pokemons : res.pokemon.map(p=> p.pokemon.name),
                urls : res.pokemon.map(p=>p.pokemon.url),
                type : res.name,
                page: 1,
                query: "",
                count : res.pokemon.map(p=> p.pokemon.name).length
            });
        })
    }

    onTypeClick = (url) =>{
        
        fetch(url)
        .then(res => res.json())
        .then(res =>{
            
            
            this.setState({
                pokemons : res.pokemon.map(p=> p.pokemon.name),
                urls : res.pokemon.map(p=>p.pokemon.url),
                type : res.name,
                page : 1,
                query : "",
                count : res.pokemon.map(p=> p.pokemon.name).length
            })
            
        })

    }

    onPageClick = (page)=>{
        
        this.setState({
            page : page
        })

    }

    onTextChange = (event)=>{
        let input = event.target.value.toLowerCase().trim();
    
        this.setState({
            page : 1,
            query : input
        })

    }

    notifyPages = (len)=> {
        this.setState({
            count : len,
            page : 1,
        })
    }

    render(){

        let count = this.state.pokemons.length;
        let type = this.state.type === ""? "" : this.state.type[0].toUpperCase() + this.state.type.substring(1);

        return (
            
            <div>
                <h1 className='app-title'>Pok<span className='letter' style={{color : colors[this.state.type]}}>é</span>dex Web App</h1>
                <h5 className='api-link'>
                    <a href="https://pokeapi.co/" rel='noreferrer' target="_blank">Pokémon API</a>
                    <a href="https://github.com/jonathanpizarra/pokedex-app" rel='noreferrer' target="_blank">Fork on Github</a>
                </h5>
                <TypeContainer onTypeClick={this.onTypeClick}/>
                <h2 className='pokemon-count'>{type === "" ? "" : `${count} ${type} Type Pokémons`}</h2>
                <SearchBox onTextChange={this.onTextChange} type={this.state.type} query={this.state.query}/>
                <Pages page={this.state.page} type={this.state.type} query={this.state.query} count={this.state.count} onPageClick={this.onPageClick}/>
                {
                    this.state.pokemons.length === 0? 
                    <Empty/> : 
                    <CardList notifyPages={this.notifyPages} pokemons={this.state.pokemons} urls={this.state.urls} query={this.state.query} type={this.state.type} page={this.state.page}/>
                }
            </div>
            
        )
    }
}

export default App;
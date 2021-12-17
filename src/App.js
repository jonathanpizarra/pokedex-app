import React, {Component} from 'react';
import TypeContainer from './TypeContainer';
import Pages from './Pages';
import CardList from './CardList';
import Empty from './Empty'
import './App.css';
class App extends Component{

    constructor(){
        super();

        this.state = {
            pokemons : [],
            urls : [],
            type : "",
            page : 1
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
                page: 1
            }, ()=>{
                if(this.state.pokemons.length !== 0){
                    document.querySelector(`button[val="${this.state.page}"]`).classList.toggle("selected-page");
                }
                document.querySelector(`.type-${this.state.type} .type-hidden`).classList.toggle('animate-hidden');
            });
          
        })
    }

    onTypeClick = (url) =>{
        
        fetch(url)
        .then(res => res.json())
        .then(res =>{
            if(this.state.pokemons.length !== 0){
                document.querySelector(`button[val="${this.state.page}"]`).classList.toggle("selected-page");
            }
            document.querySelector(`.type-${this.state.type} .type-hidden`).classList.toggle('animate-hidden');
            this.setState({
                pokemons : res.pokemon.map(p=> p.pokemon.name),
                urls : res.pokemon.map(p=>p.pokemon.url),
                type : res.name,
                page : 1
            }, ()=>{
                if(this.state.pokemons.length !== 0){
                    document.querySelector(`button[val="${this.state.page}"]`).classList.toggle("selected-page");
                }
                document.querySelector(`.type-${this.state.type} .type-hidden`).classList.toggle('animate-hidden');
            })
            
        })

    }

    onPageClick = (page)=>{
        if(this.state.pokemons.length !== 0){
            document.querySelector(`button[val="${this.state.page}"]`).classList.toggle("selected-page");
        }
        this.setState({
            pokemons : this.state.pokemons,
            urls : this.state.urls,
            type : this.state.type,
            page : page
        }, ()=>{
            if(this.state.pokemons.length !== 0){
                document.querySelector(`button[val="${this.state.page}"]`).classList.toggle("selected-page");
            }
        })

    }

    render(){

        let count = this.state.pokemons.length;
        let type = this.state.type === ""? "" : this.state.type[0].toUpperCase() + this.state.type.substring(1);

        
        return (
            
            <div>
                <h1>Pokedex App</h1>
                <TypeContainer onTypeClick={this.onTypeClick}/>
                <h2 className='pokemon-count'>{type === "" ? "" : `${count} ${type} Type Pokemons`}</h2>
                <Pages count={count} onPageClick={this.onPageClick}/>
                {
                    this.state.pokemons.length === 0? 
                    <Empty/> : 
                    <CardList pokemons={this.state.pokemons} urls={this.state.urls} type={this.state.type} page={this.state.page}/>
                }
            </div>
            
        )
    }
}

export default App;
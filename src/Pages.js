import React, {Component} from 'react';
import Page from './Page';
class Pages extends Component{
    constructor(props){
        super(props);
    
        this.page_item_count = 12;

        let pageCount = Math.ceil(props.count/this.page_item_count);
        if (pageCount === 0) pageCount = 1;
        
        this.state = {
            currentPage : props.page,
            count : props.count,
            pages : pageCount,
        }
        
    }

    componentDidUpdate(prev){
        if(prev.count !== this.props.count || prev.page !== this.props.page || prev.query !== this.props.query){
            let pageCount = Math.ceil(this.props.count/this.page_item_count);
            if (pageCount === 0) pageCount = 1;
            
            this.setState({
                currentPage : this.props.page,
                count : this.props.count,
                pages : pageCount
            });

            if(this.props.page === 1 && prev.page !== 1 && prev.query !== this.props.query){
                document.querySelector(`button[val="1"]`).classList.toggle('selected-page');
            }
        }
    }

    componentDidMount(){
        document.querySelector(`button[val="${this.state.currentPage}"]`).classList.toggle('selected-page');
    }

    onPageClick = (val)=>{
        if(val !== this.state.currentPage){
            document.querySelector(`button[val="${val}"]`).classList.toggle('selected-page');
            document.querySelector(`button[val="${this.state.currentPage}"]`).classList.toggle('selected-page');
            this.props.onPageClick(val);
        }
       
    }

    render(){
        return(
            <div className='pages'>
                {
                    this.state.pages === 0? "" :
                    [...Array(this.state.pages).keys()].map((v)=>{
                        return <Page onPageClick={this.onPageClick} key={v} val={v+1}/>
                    })
                }
            </div>
        )
    }

}

export default Pages;
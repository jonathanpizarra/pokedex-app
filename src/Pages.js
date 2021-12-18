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
            previousPage : 0,
            count : props.count,
            pages : pageCount,
        }
        
    }

    componentDidUpdate(prev){
        // update if :
        // pokemon count has changed,
        // user clicks new page number,
        // user is typing,
        // user clicks new type
        if(prev.count !== this.props.count || prev.page !== this.props.page || prev.query !== this.props.query || prev.type !== this.props.type){
            let pageCount = Math.ceil(this.props.count/this.page_item_count);
            if (pageCount === 0) pageCount = 1;
            
            // if user clicks new type
            let newPrevious = this.state.currentPage;
            let newCurrent = prev.type !== this.props.type? 1 : this.props.page

            this.setState({
                currentPage : newCurrent,
                previousPage : newPrevious,
                count : this.props.count,
                pages : pageCount
            }, ()=>{
                if(newPrevious !== newCurrent){
                    if(newPrevious <= pageCount){
                        document.querySelector(`button[val="${this.state.previousPage}"]`).classList.remove('selected-page');
                    }
                    document.querySelector(`button[val="${this.state.currentPage}"]`).classList.add('selected-page');
                }



                
            });

        }
    }

    componentDidMount(){
        document.querySelector(`button[val="1"]`).classList.add('selected-page');
    }

    onPageClick = (val)=>{
        if(val !== this.state.currentPage){
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
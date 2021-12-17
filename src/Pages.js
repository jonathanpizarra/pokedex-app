import React, {Component} from 'react';

class Pages extends Component{
    constructor(props){
        super(props);
    

        let pageCount = Math.ceil(props.count/9);
        if (pageCount === 0) pageCount = 1;
        
        this.state = {
            count : props.count,
            pages : pageCount
        }
    }

    componentDidUpdate(prev){
        if(prev.count !== this.props.count){
            let pageCount = Math.ceil(this.props.count/9);
            //if (pageCount === 0) pageCount = 1;
            
            this.setState({
                count : this.props.count,
                pages : pageCount
            });
        }
    }

    render(){

        return(
            <div className='pages'>
                {
                    this.state.pages === 0? "" :
                    [...Array(this.state.pages).keys()].map((v)=>{
                        return <button className='page-button' onClick={()=>{this.props.onPageClick(v+1)}} key={v} val={v+1}>{v+1}</button>
                    })
                }
            </div>
        )
    }

}

export default Pages;
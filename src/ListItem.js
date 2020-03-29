import React, { Component } from 'react';
import './ListItem.css'

class ListItem extends Component{
    constructor (props) {
        super(props);
        this.state = {
            defaultStatus: this.props.item.done
        }
    }
    
    textClick = (event) => {
        
        this.setState(
            {defaultStatus : !this.state.defaultStatus}
        )
    }
    render () {
        const item = this.props.item    
        return <p onClick ={this.textClick.bind(this)} className={this.state.defaultStatus ? 'item': 'done-item'} >{item.content}</p>
    }
}


export default ListItem;
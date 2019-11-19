import React from 'react'
class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }


    render() {

        return (

            <li onClick={()=>this.props.tabClick(this.props.index)} className={this.props.active ? 'y-tab-active y-tab-item' : 'y-tab-item'} key={this.props.title}>{this.props.title}</li>

        );
    }
}

export default Item;
import React, { Component } from 'react';
import './index.less'
class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            style:{
                height:this.props.height,
                width:this.props.width,
            }
        }
    }
    render() {
        return (
            <div style={this.state.style} className="tab-wrap">
                <ul className="y-tab-vertical">
                    {
                        this.props.data.map((item,index)=>(
                        <li key={index}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default index;
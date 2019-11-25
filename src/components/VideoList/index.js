import React, { Component } from 'react';
import { Flex, WingBlank, Icon,} from 'antd-mobile';
import Video from './Video.js'

function Title(props){
    return props.title ? <h3 className="y-box-title"><Icon type="check" size="md"></Icon> {props.title}</h3> : null
}
class VideoList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){

    }
    render() {
        return (
            this.props.data.length<=0 ? null :
               <div className="y-box" {...this.props}>
                <WingBlank >
                    <Title title={this.props.title}/>
                    <Flex justify="between" wrap="wrap">
                        {
                            this.props.data.map(item => (
                                <Video key={item.title} {...item} />
                            ))
                        }

                    </Flex>
                </WingBlank>
                </div>
         
        );
    }
}

export default VideoList;
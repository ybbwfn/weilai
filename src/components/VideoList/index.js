import React, { Component } from 'react';
import { Flex, WingBlank, Icon,} from 'antd-mobile';


class VideoList extends Component {
    constructor(props) {
        super(props)
        console.log(this)
    }
    componentDidMount(){

    }
    render() {
        return (
            this.props.data.length<=0 ? null :
               <div className="y-box">
                <WingBlank >
                    <h3 className="y-box-title"><Icon type="check" size="md"></Icon> {this.props.title}</h3>
                    <Flex justify="between" wrap="wrap">
                        {
                            this.props.data.map(item => (
                                <div className="y-video-wrap" key={item.title}>
                                    <div className="y-video-img">
                                        <img src={item.img} />
                                    </div>
                                    <div className="y-video-title">{item.title}</div>
                                    <div className="y-video-desc">
                                        <span>级别：{item.level}</span>
                                        <span>￥ {item.price}</span>
                                    </div>
                                </div>
                            ))
                        }

                    </Flex>
                </WingBlank>
                </div>
         
        );
    }
}

export default VideoList;
import React, { Component } from 'react';
import { Flex, WingBlank, Icon,} from 'antd-mobile';
import styles from './VideoList.module.less'
function Title(props){
    return props.title ? <h3 className="y-box-title"><Icon type="check" size="md"></Icon> {props.title}</h3> : null
}
class VideoList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        console.log(styles)
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
                                <div className={styles['y-video-wrap']} key={item.title}>
                                    <div className={styles['y-video-img']}>
                                        <img src={item.img} />
                                    </div>
                                    <div className={styles['y-video-title']}>{item.title}</div>
                                    <div className={styles['y-video-desc']}>
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
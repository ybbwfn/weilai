import React, { Component } from 'react';
import styles from './Video.module.less'
class video extends Component {
    render() {
        return (
            
        <div className={styles['y-video-wrap']} key={this.props.title} style={this.props.style}>
            <div className={styles['y-video-img']}>
                <img src={this.props.img} />
            </div>
            <div className={styles['y-video-title']}>{this.props.title}</div>
            <div className={styles['y-video-desc']}>
                <span>级别：{this.props.level}</span>
                <span>￥ {this.props.price}</span>
            </div>
        </div>
        );
    }
}

export default video;
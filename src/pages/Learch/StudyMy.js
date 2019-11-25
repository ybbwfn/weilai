import React, { Component } from 'react';
import {Button,WhiteSpace} from 'antd-mobile'
import styles from './StudyMy.module.less'
class StudyMy extends Component {
    render() {
        return (
            <div className={styles['wrap']}>
                <div className={styles['img-wrap']}>
                    <img src={this.props.url} alt=""/>
                </div>
                <div className={styles['hours']}>
                    <span>已学习至第0节</span>
                    <br />
                    <WhiteSpace />
                    <span>时长：12hours</span>
                </div>
                <Button className={styles['btn']} type="warning" size="small">继续学习</Button>
            </div>
        );
    }
}

export default StudyMy;
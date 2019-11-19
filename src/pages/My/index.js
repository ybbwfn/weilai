import React from 'react';
import styles from './my.module.less'
import touxiang from '@/assets/img/touxiang.png'
import { Accordion, List } from 'antd-mobile';

function Head(props) {
    return (
        <div className={styles['user-wrap']+' clearFix'}>
            <div className={styles['user-img']}>
                <img src={props.imgUrl ||touxiang} alt="" />
            </div>
            <div className={styles['user-name']}>{props.name || '登录/注册'}</div>
        </div>
    );
}
class AccordionExmple extends React.Component {
    onChange = (key) => {
      console.log(key);
    }
    render() {
      return (
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Accordion  className="my-accordion" onChange={this.onChange}>
            <Accordion.Panel header="未支付订单">
              <List className="my-list">
                <List.Item>content 1</List.Item>
                <List.Item>content 2</List.Item>
                <List.Item>content 3</List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="我的收藏" className="pad">
              text text text text text text text text text text text text text text text
            </Accordion.Panel>
          </Accordion>
        </div>
      );
    }
  }
  
class index extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log(styles)
    }
    render() {
        return (
            <div className="container">
            <Head/>
            <div className={styles['vip-wrap']}>
                <span className={styles['vip-icon']}></span>
                <span>开通超级会员</span>
            </div>
            <AccordionExmple />
        </div>
        );
    }
}
export default index;

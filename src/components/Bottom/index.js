import { TabBar } from 'antd-mobile';
import React, { Component } from 'react'
import { withRouter } from  'react-router-dom'
class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      tabList: [
        { 
          name: '首页', 
          path: '/',
          icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg', 
          activeIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
          badge:1,
        },
        { 
          name: '视频列表', 
          path: '/Video',
          icon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg', 
          activeIcon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
          badge:1,
        },
        { 
          name: '我的学习', 
          path: '/Learch',
          icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg', 
          activeIcon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
          badge:1,
        },
        { 
          name: '个人中心', 
          path: '/My',
          icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg', 
          activeIcon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
          badge:1,
        },
      ]
    };
  }

  tabClick(item){
    this.setState({
      selectedTab: item.name,
    });
    this.props.history.push(item.path)
  }

  render() {
    return (
      <div className="bottom-wrap">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            this.state.tabList.map(item => (<TabBar.Item
              title={item.name}
              key={item.path}
              icon={{ uri: item.icon }}
              selectedIcon={{ uri: item.activeIcon }}
              selected={this.state.selectedTab === item.name}
              badge={item.badge}
              onPress={() => { this.tabClick(item) }}
            >
            </TabBar.Item>))
          }
        </TabBar>
      </div>
    );
  }
}

export default withRouter(Bottom)
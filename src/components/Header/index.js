import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Button} from 'antd-mobile'
//没有配置路由的组件使用this.props.history 需要 withRouter
import { withRouter } from  'react-router-dom'

// //返回数据的方法，供我们connect使用，他会帮我们把数据转换成props
//  const mapStateToProps=(state)=>{
//      return {
//          toggle:state.menu.toggle
//      }
//  }
// //返回dispatch方法的方法，供我们connect使用，他会帮我们把dispatch转换成props
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         changeToggle:()=>dispatch({type:'changeToggle'}),
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Header)
@connect(
    state=>({
        toggle:state.menu.toggle,   
        count: state.count,
    }),
    {
        changeToggle:()=>({type:'changeToggle'}),
        asyncCount: ()=> dispatch => {
            setTimeout(() => {
                dispatch({type: 'asyncCount'})
            }, 2000);
        },
    }
)
class Header extends Component{
    componentDidMount(){
        console.log(this)
    }
    render(){
        return <header className="ant-layout-header" style={{background:'#fff'}}>
                      <Icon
              className="trigger"
              type={this.props.toggle ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.changeToggle}
            />
            {/* <button onClick={this.props.asyncCount}>asyncCount</button>
            ----{this.props.count} */}
            <Button onClick={()=>this.props.history.push('/Login')}>登录</Button>
        </header>
    }
}

export default withRouter(Header);

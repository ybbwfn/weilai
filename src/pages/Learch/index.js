import React, { Component } from 'react';
import StudyMy from './StudyMy'
import { Flex, WhiteSpace ,WingBlank} from 'antd-mobile';
class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: [],
            styles: {
                height:'50px',
                lineHeight:'50px',
                background:'#f7f7f7',
                textAlign:'center',
                boxShadow: '0 0 3px #888',
            }
        }
    }

    componentDidMount() {
        this.getData();

    }
    getData(){
        window.$axios.post('/api/getAllVideo').then(res => {
            if(res.success){
                this.setState({
                    list: res.list
                })
                // console.log(res.list)
            }
        })
    }
    render() {
        return (
            <div className="container">
                <h3 style={this.state.styles}>我的学习</h3>
                <WingBlank>
                <Flex direction="column">
                    {
                        this.state.list.map(item => (
                            <Flex.Item key={item.title} style={{width:'100%'}}> 
                                <WhiteSpace />
                                <StudyMy {...item} />
                                
                            </Flex.Item>
                           
                        ))
                    }
                </Flex>
                
                </WingBlank>
            </div>
        );
    }
}

export default index;
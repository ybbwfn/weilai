import React from 'react'
import Tab from '@/components/Tab'
import TabVertical from '@/components/TabVertical'
import VideoList from '@/components/VideoList'
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viedeoList: []
        }
    }
    componentDidMount(){
        window.$axios.post('/api/getAllVideo').then(res => {
            if(res.success){
                this.setState({
                    viedeoList: res.list
                })
            }
        })
    }
    render() {
        const tabList = [
            { title: '全部' },
            { title: '后端' },
            { title: '前端' },
            { title: '运维' },
            { title: '测试' },
            { title: '6th Tab' },

            { title: '8th Tab' },
            { title: '9th Tab' },
            { title: '10th Tab' },
            { title: '11th Tab' },
            { title: '12h Tab' },
            { title: '13h Tab' },
            { title: '14h Tab' },
            { title: '15h Tab' },
            { title: '15h Tab' },
            { title: '15h Tab' },
            { title: '15h Tab' },
            { title: '15h Tab' },
            { title: '15h Tab' },
            { title: '15h Tab' },
        ];

        return (
            <div className="container">
                <Tab data={tabList} />
                <TabVertical data={tabList} width="1.6rem" height="10.8rem" />
                <VideoList 
                data={ this.state.viedeoList } 
                style={{width: '5.5rem',float: 'right',height:"10.8rem",overflow:'auto',margin:0,padding:0,background:'#f7f7f7'}}
                />
            </div>

        );
    }
}

export default Demo;
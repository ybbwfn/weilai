import React, { Component } from 'react';
import VideoList from '@/components/VideoList'


class HotVideo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viedeoList: []
        }
    }
    componentDidMount(){
        window.$axios.post('/api/getRecommend').then(res => {
            if(res.success){
                this.setState({
                    viedeoList: res.list
                })
            }
        })
    }
    render() {
        return (
            <VideoList data={ this.state.viedeoList } title='视频推荐'/>
        );
    }
}

export default HotVideo;
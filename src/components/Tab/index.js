import React from 'react'
import Tab from './Tab'
import TabItem from './TabItem'
import './Tab.less'
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }

    }
    tabClick =(index) => {
        this.setState({
            index:index
        })
    }
    render() {

        return (


            <Tab index={this.state.index}>
                {
                    this.props.data.map((item,index) => (
                        <TabItem tabClick={this.tabClick} title={item.title} active={index == this.state.index} index={index}  key={index} />
                    ))
                }
            </Tab>

        );
    }
}

export default Demo;
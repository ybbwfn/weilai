import React from 'react'

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startX: 0,//点击坐标当前clientX
            lastX: 0,
            transX: 0,
            reBounding: false,
            currentX: 0,//移动中当前clientX
            isMoveLeft: false,
            isMoveRight: false,
            listWidth: 0,//可视区与可滑动元素宽度差值;
            pageWidth: 0,// 可视区宽度;
            additionalX: 30, // 近似等于超出边界时最大可拖动距离(px);
        }

    }
    componentDidMount() {
        this.setState({
            pageWidth: window.innerWidth,
            listWidth: this.refs.tabs.offsetWidth - window.innerWidth
        })
    }

    touchStart = (e) => {
        e.stopPropagation()
        this.setState({
            startX: e.touches[0].clientX,
            lastX: e.touches[0].clientX,
            currentX: e.touches[0].clientX
        })

    }
    touchEnd = (e) => {
        if(this.state.transX>0){
            this.setState({
                transX: 0
            })
        }else if(this.state.transX<-this.state.listWidth){
            this.setState({
                transX: -this.state.listWidth
            })
        }

    }
    touchMove = (e) => {
        if (this.state.listWidth <= 0) return
        e.stopPropagation()
        let clientX = e.touches[0].clientX;
        this.setState({
            currentX: clientX,
            isMoveLeft: clientX < this.state.startX,
            isMoveRight: clientX > this.state.startX,
        })
        this.moveFollowTouch()
    }

    // touch拖动
    moveFollowTouch = () => {
        if (this.state.isMoveLeft) { // 向左拖动
            if(this.state.transX<-this.state.listWidth){
                this.setState({
                    transX: this.state.transX + this.state.additionalX *(this.state.currentX - this.state.lastX) / (this.state.transX+this.state.pageWidth)
                })
            }else{
                this.setState({
                    transX: this.state.transX + this.state.currentX - this.state.lastX
                })
            }
        } else if (this.state.isMoveRight){
            if(this.state.transX>=0){
                this.setState({
                    transX: this.state.transX + this.state.additionalX * (this.state.currentX - this.state.lastX) / (this.state.transX+this.state.pageWidth)
                })
            }else{
                this.setState({
                    transX: this.state.transX + this.state.currentX - this.state.lastX
                })
            }
        }
        this.setState({
            lastX: this.state.currentX
        })
    }
    render() {
        const tabs = [
            { title: '全部', active: true },
            { title: '后端' },
            { title: '前端' },
            { title: '运维' },
            { title: '测试' },
            { title: '6th Tab' },

            { title: '8th Tab' },
            { title: '9th Tab' },
        ];

        return (


            <div className="y-tab">
                <ul onTouchMove={this.touchMove} className="y-tab-list" ref="tabs" style={{ transform: `translateX(${this.state.transX}px)` }} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} >
                    {
                        tabs.map(item => (
                            <li className={item.active ? 'y-tab-active y-tab-item' : 'y-tab-item'} key={item.title}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>

        );
    }
}

export default Demo;
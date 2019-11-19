import React from 'react'

class Tab extends React.Component {
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
    componentDidUpdate(prevProps){
        if (this.props.index !== prevProps.index) {
            this.setTransX()
        }
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
            startX: this.state.lastX,
            isMoveLeft: clientX < this.state.startX,
            isMoveRight: clientX > this.state.startX,
        })
        this.moveFollowTouch()
    }

    // touch拖动
    moveFollowTouch = () => {
        if (this.state.isMoveLeft) { // 向左拖动
            if (this.state.transX <= 0 && this.state.transX + this.state.listWidth > 0 || this.state.transX > 0) {
                this.setState({
                    transX: this.state.transX + this.state.currentX - this.state.lastX
                })
            } else if (this.state.transX + this.state.listWidth <= 0) {
                this.setState({
                    transX: this.state.transX + this.state.additionalX * (this.state.currentX - this.state.lastX) / (this.state.transX + this.state.pageWidth)
                })
            }
        } else if (this.state.isMoveRight) {
            if (this.state.transX >= 0) {
                this.setState({
                    transX: this.state.transX + this.state.additionalX * (this.state.currentX - this.state.lastX) / (this.state.transX + this.state.pageWidth)
                })
            } else if((this.state.transX <= 0 && this.state.transX + this.state.listWidth >= 0) ||
            this.state.transX + this.state.listWidth <= 0){
                this.setState({
                    transX: this.state.transX + this.state.currentX - this.state.lastX
                })
            }
        }
        this.setState({
            lastX: this.state.currentX
        })
    }
    //点击计算transX
    setTransX = () => {
        let index = this.props.index;
        let childrenW = this.refs.tabs.children[index].offsetWidth;
        let left = this.refs.tabs.children[index].offsetLeft+childrenW/2

        if(left< this.state.pageWidth/2){
            this.setState({
                transX: 0,
            }) 

        }else if(left> this.state.listWidth+this.state.pageWidth/2-childrenW){
            this.setState({
                transX: -this.state.listWidth,
            }) 
        }else{
            this.setState({transX: this.state.pageWidth/2-left}) 
        }

    }
    render() {

        return (


            <div className="y-tab">
               
                <ul onTouchMove={this.touchMove} className="y-tab-list" ref="tabs" style={{ transform: `translateX(${this.state.transX}px)` }} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} >
                    {
                      this.props.children
                    }
                </ul>
            </div>

        );
    }
}

export default Tab;
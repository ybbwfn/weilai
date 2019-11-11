import React from 'react'
import Bottom from '@/components/Bottom'

class MainLayout extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div className="main-layout">
      {this.props.children}
      <Bottom />
    </div>
  }
}

export default MainLayout
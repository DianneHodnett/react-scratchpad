import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

import CustomDrawer from './CustomDrawer'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }
  render () {
    const toggleOpen = () => {
      this.setState(() => ({open: (!this.state.open)}))
    }
    
    return (
      <div>
        <AppBar title="ScratchPad"
                onLeftIconButtonClick={toggleOpen} />
        <CustomDrawer open={this.state.open}
                      change={toggleOpen}/>
      </div>
    )
  }
}
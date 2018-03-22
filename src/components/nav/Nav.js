import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { red500 } from 'material-ui/styles/colors'

import CustomDrawer from './CustomDrawer'

const styles = {
  color: red500
}
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
                titleStyle={styles}
                onLeftIconButtonClick={toggleOpen} />
        <CustomDrawer open={this.state.open}
                      change={toggleOpen}/>
      </div>
    )
  }
}
import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class extends Component {
  render () {
    const handleClick= (match) => {
      window.location.replace(match)
    }
    return (
      <div>
        <Drawer open={this.props.open}
                docked={false}
                onRequestChange={this.props.change}>
          <MenuItem onClick={() => handleClick('/')}>Home</MenuItem>
          <MenuItem onClick={() => handleClick('/Contact')} >Contact</MenuItem>
          <MenuItem onClick={() => handleClick('/About')}>About</MenuItem>
        </Drawer>
      </div>
    )
  }
}
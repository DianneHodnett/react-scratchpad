import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import {Link} from 'react-router-dom'


export default class extends Component {
  render () {
    return (
      <div>
        <Drawer open={this.props.open}
                docked={false}
                onRequestChange={this.props.change}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/about'>About Us</Link></li>
          </ul>
        </Drawer>
      </div>
    )
  }
}
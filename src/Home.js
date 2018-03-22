import React, { Component } from 'react'

import Nav from './components/nav/Nav'
import Footer from './components/Footer'
import Routes from './config/Routes'


export default class extends Component {
  render () {
    return (
      <div>
        <Nav navIcon2={this.props.navIcon1}/>
        <Routes/>
        <Footer/>
      </div>
    )
  }
}
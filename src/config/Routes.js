import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Content from '../pages/Content'
import Contact from '../pages/Contact'
import AboutUs from '../pages/AboutUs'

export default class extends Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={Content}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={AboutUs}/>
      </div>
    )
  }
}
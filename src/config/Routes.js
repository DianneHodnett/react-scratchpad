import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Content from '../pages/Content'
import Contact from '../pages/Contact'
import AboutUs from '../pages/AboutUs'
import Dice from '../pages/Dice'

export default class extends Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={Content}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={AboutUs}/>
        <Route exact path='/dice' component={Dice}/>
      </div>
    )
  }
}
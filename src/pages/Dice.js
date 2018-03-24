import React, { Component } from 'react'
import Die from '../components/dice/Die'

export default class extends Component {
  render () {
    return (
      <div>
        Dice
        <Die/>
      </div>
    )
  }
}
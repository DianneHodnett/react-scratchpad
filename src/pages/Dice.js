import React, { Component } from 'react'
import Die from '../components/dice/Die'
import DieForm from '../components/dice/DieForm'

export default class extends Component {
  render () {
    return (
      <div>
        <Die numSides="20"/>
        <hr/>
        <DieForm/>
      </div>
    )
  }
}